# Authentication Implementation - Missing Features

## Overview

The current authentication implementation provides basic Google OAuth login functionality, but several important features are missing for a production-ready authentication system.

## ✅ Currently Implemented

1. ✅ Google OAuth 2.0 login flow
2. ✅ User data storage in localStorage
3. ✅ Token storage in localStorage
4. ✅ Protected routes with redirect to login
5. ✅ Logout functionality
6. ✅ User context and hooks
7. ✅ User menu with profile display

## ❌ Missing Features

### 1. **Token Expiration Handling** (HIGH PRIORITY)

**Issue**: Google OAuth access tokens expire (typically after 1 hour), but the app doesn't check for expiration.

**Impact**: Users may appear logged in but their token is invalid, causing API calls to fail.

**Solution Needed**:

- Add token expiration timestamp storage
- Check token expiration on app load
- Validate token before making API calls
- Auto-logout when token expires

**Files to modify**:

- `src/services/auth.ts` - Add expiration tracking
- `src/contexts/AuthContext.tsx` - Add expiration check on mount

---

### 2. **Token Validation** (HIGH PRIORITY)

**Issue**: No validation that the stored token is still valid with Google.

**Impact**: App assumes token is valid even if it's been revoked or expired.

**Solution Needed**:

- Validate token with Google API on app load
- Handle invalid token responses
- Refresh or re-authenticate if token is invalid

**Files to modify**:

- `src/services/auth.ts` - Add `validateToken()` function
- `src/contexts/AuthContext.tsx` - Validate token on mount

---

### 3. **Token Refresh Mechanism** (MEDIUM PRIORITY)

**Issue**: Google OAuth tokens can be refreshed, but no refresh logic is implemented.

**Impact**: Users must re-login when token expires, even if refresh token is available.

**Solution Needed**:

- Store refresh token (if using authorization code flow)
- Implement token refresh before expiration
- Handle refresh token expiration

**Note**: Current implementation uses implicit flow which doesn't provide refresh tokens. Consider switching to authorization code flow with PKCE for refresh token support.

**Files to modify**:

- `src/services/auth.ts` - Add refresh token storage and refresh logic
- `src/pages/Login.tsx` - Switch to authorization code flow (if needed)

---

### 4. **API Request Interceptor** (MEDIUM PRIORITY)

**Issue**: If backend API is added, there's no mechanism to automatically attach auth tokens to requests.

**Impact**: Manual token attachment needed for every API call.

**Solution Needed**:

- Create API client with automatic token injection
- Handle 401/403 responses (token expired/invalid)
- Auto-refresh or logout on auth errors

**Files to create**:

- `src/services/api.ts` - API client with auth interceptor

**Example**:

```typescript
// src/services/api.ts
import { authService } from "./auth";

const apiClient = {
  get: async (url: string) => {
    const token = authService.getToken();
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 401) {
      // Token expired, logout user
      authService.clearAuth();
      window.location.href = "/login";
      throw new Error("Unauthorized");
    }

    return response.json();
  },
  // ... other methods
};
```

---

### 5. **Error Handling for Expired Tokens** (MEDIUM PRIORITY)

**Issue**: No graceful handling when API calls fail due to expired/invalid tokens.

**Impact**: Users see generic errors instead of being prompted to re-login.

**Solution Needed**:

- Catch 401/403 errors globally
- Show user-friendly message
- Auto-redirect to login
- Clear invalid auth data

**Files to modify**:

- `src/services/api.ts` - Add error handling
- `src/contexts/AuthContext.tsx` - Add error handling hook

---

### 6. **Token Expiration Check on App Load** (HIGH PRIORITY)

**Issue**: App doesn't validate token expiration when loading from localStorage.

**Impact**: App may show user as logged in even with expired token.

**Solution Needed**:

- Check token expiration timestamp on app initialization
- Validate token with Google if timestamp is close to expiration
- Logout user if token is expired

**Files to modify**:

- `src/contexts/AuthContext.tsx` - Add expiration check in `useEffect`

**Example**:

```typescript
useEffect(() => {
  const loadUser = async () => {
    try {
      const savedUser = authService.getUser();
      const token = authService.getToken();
      const tokenExpiry = authService.getTokenExpiry();

      if (savedUser && token) {
        // Check if token is expired
        if (tokenExpiry && Date.now() > tokenExpiry) {
          // Token expired, clear auth
          authService.clearAuth();
          setIsLoading(false);
          return;
        }

        // Validate token with Google
        const isValid = await authService.validateToken(token);
        if (isValid) {
          setUser(savedUser);
        } else {
          authService.clearAuth();
        }
      }
    } catch (error) {
      console.error("Failed to load user:", error);
      authService.clearAuth();
    } finally {
      setIsLoading(false);
    }
  };

  loadUser();
}, []);
```

---

### 7. **Session Management** (LOW PRIORITY)

**Issue**: No session timeout or "remember me" functionality.

**Impact**: Users stay logged in indefinitely (security concern) or are logged out too frequently (UX concern).

**Solution Needed**:

- Add session timeout option
- Implement "Remember Me" functionality
- Store session preferences

**Files to modify**:

- `src/services/auth.ts` - Add session management
- `src/pages/Login.tsx` - Add "Remember Me" checkbox

---

### 8. **Backend Integration** (FUTURE)

**Issue**: Currently, authentication is purely client-side. No backend validation or user registration.

**Impact**:

- No server-side user validation
- No user data persistence
- No secure token storage

**Solution Needed** (when backend is added):

- Send token to backend for validation
- Store user data in database
- Use httpOnly cookies for token storage
- Implement server-side session management

---

### 9. **Security Enhancements** (MEDIUM PRIORITY)

**Issues**:

- Tokens stored in localStorage (vulnerable to XSS)
- No CSRF protection
- No rate limiting on login attempts

**Solutions**:

- Use httpOnly cookies (requires backend)
- Implement CSRF tokens
- Add rate limiting
- Use secure storage options

---

## Recommended Implementation Order

1. **Token Expiration Handling** (Critical for production)
2. **Token Validation** (Critical for production)
3. **Token Expiration Check on App Load** (Critical for production)
4. **API Request Interceptor** (When backend is added)
5. **Error Handling for Expired Tokens** (When backend is added)
6. **Token Refresh Mechanism** (Nice to have)
7. **Session Management** (Nice to have)
8. **Security Enhancements** (Production requirements)

---

## Quick Wins

### Add Token Expiration Tracking

```typescript
// In src/services/auth.ts
const TOKEN_EXPIRY_KEY = "tripr_token_expiry";

export const authService = {
  // ... existing methods

  saveToken: (token: string, expiresIn?: number) => {
    try {
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
      if (expiresIn) {
        const expiryTime = Date.now() + expiresIn * 1000;
        localStorage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());
      }
    } catch (error) {
      console.error("Failed to save token:", error);
    }
  },

  getTokenExpiry: (): number | null => {
    try {
      const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);
      return expiry ? parseInt(expiry, 10) : null;
    } catch {
      return null;
    }
  },

  isTokenExpired: (): boolean => {
    const expiry = authService.getTokenExpiry();
    if (!expiry) return false; // No expiry info, assume valid
    return Date.now() > expiry;
  },
};
```

### Add Token Validation

```typescript
// In src/services/auth.ts
validateToken: async (token: string): Promise<boolean> => {
  try {
    const response = await fetch(
      "https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=" + token
    );
    return response.ok;
  } catch {
    return false;
  }
},
```

---

## Testing Checklist

- [ ] Token expiration is detected
- [ ] User is logged out when token expires
- [ ] Token validation works on app load
- [ ] Invalid tokens are handled gracefully
- [ ] API calls include auth tokens (when backend exists)
- [ ] 401/403 errors trigger logout
- [ ] Session persists across page refreshes
- [ ] Logout clears all auth data
