# Backend Integration Implementation

This document describes the backend integration implementation for Tripr authentication system.

## Overview

The backend integration implements server-side authentication with:

- Google OAuth token validation
- User data persistence in database
- httpOnly cookie-based session management
- Server-side session management

## Implementation Details

### Backend Server (`server/`)

#### Structure

- **Express.js** server with TypeScript
- **In-memory database** (can be replaced with PostgreSQL/MongoDB)
- **Cookie-based authentication** using httpOnly cookies
- **CORS** configured for frontend origin

#### Key Components

1. **Database (`src/db/database.ts`)**

   - In-memory storage for users and sessions
   - Automatic cleanup of expired sessions
   - Can be easily replaced with a real database

2. **Authentication Routes (`src/routes/auth.ts`)**

   - `POST /api/auth/login` - Validates Google token and creates session
   - `GET /api/auth/me` - Get current user from session
   - `POST /api/auth/validate` - Validate Google token
   - `POST /api/auth/logout` - Logout and clear session

3. **Authentication Middleware (`src/middleware/auth.ts`)**

   - `requireAuth` - Protects routes requiring authentication
   - `optionalAuth` - Optionally loads user from session

4. **Google Auth Service (`src/services/googleAuth.ts`)**
   - Validates Google OAuth tokens
   - Fetches user information from Google

### Frontend Updates

#### Authentication Service (`src/services/auth.ts`)

- Added `loginWithBackend()` - Sends token to backend for validation
- Added `getCurrentUser()` - Gets user from backend session
- Added `logoutFromBackend()` - Logs out from backend
- Updated `validateToken()` - Uses backend for validation
- Updated `clearAuth()` - Now async, calls backend logout

#### API Client (`src/services/api.ts`)

- Updated to use `credentials: "include"` for cookie-based auth
- Removed Bearer token header (using cookies instead)
- Added backend URL configuration via `VITE_API_URL`
- Enhanced error handling for 401/403 responses

#### Login Page (`src/pages/Login.tsx`)

- Updated to call `loginWithBackend()` instead of direct Google API
- Sends Google token to backend for validation and session creation

#### Auth Context (`src/contexts/AuthContext.tsx`)

- Updated to load user from backend session on mount
- Falls back to local storage for backward compatibility
- Updated logout to call backend

## Security Features

1. **httpOnly Cookies**

   - Session ID stored in httpOnly cookies (not accessible via JavaScript)
   - Prevents XSS attacks from stealing session tokens

2. **Secure Cookies in Production**

   - Cookies set with `secure` flag in production
   - Only sent over HTTPS connections

3. **Session Expiration**

   - Sessions expire after 30 days
   - Automatic cleanup of expired sessions

4. **Server-Side Validation**
   - All Google tokens validated server-side
   - User data stored and managed server-side

## Environment Variables

### Frontend (`.env`)

```env
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_API_URL=http://localhost:3001
```

### Backend (`server/.env`)

```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:8080
GOOGLE_CLIENT_ID=your-google-client-id
```

## API Endpoints

### POST /api/auth/login

Validates Google OAuth token and creates a session.

**Request:**

```json
{
  "accessToken": "google-oauth-token"
}
```

**Response:**

```json
{
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "name": "User Name",
    "picture": "https://..."
  }
}
```

Sets httpOnly cookie `sessionId`.

### GET /api/auth/me

Get current authenticated user.

**Response:**

```json
{
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "name": "User Name",
    "picture": "https://..."
  }
}
```

### POST /api/auth/validate

Validate a Google OAuth token.

**Request:**

```json
{
  "accessToken": "google-oauth-token"
}
```

**Response:**

```json
{
  "valid": true,
  "tokenInfo": { ... }
}
```

### POST /api/auth/logout

Logout and clear session.

**Response:**

```json
{
  "message": "Logged out successfully"
}
```

## Migration Notes

The implementation maintains backward compatibility:

- Frontend still stores user data locally for quick access
- Falls back to local storage if backend session is not available
- Google token still stored locally (for Google API calls if needed)

## Future Enhancements

1. **Database Migration**

   - Replace in-memory database with PostgreSQL or MongoDB
   - Add database migrations
   - Add connection pooling

2. **Session Refresh**

   - Implement automatic session refresh
   - Add refresh token support

3. **Rate Limiting**

   - Add rate limiting to authentication endpoints
   - Protect against brute force attacks

4. **CSRF Protection**

   - Add CSRF token validation
   - Implement double-submit cookie pattern

5. **Audit Logging**
   - Log authentication events
   - Track user activity

## Testing

To test the implementation:

1. Start the backend server:

```bash
cd server
npm run dev
```

2. Start the frontend:

```bash
npm run dev
```

3. Test login flow:
   - Click "Continue with Google"
   - Verify session cookie is set
   - Verify user data is stored in backend
   - Test logout and verify session is cleared

## Troubleshooting

### CORS Errors

- Ensure `FRONTEND_URL` in backend `.env` matches frontend URL
- Check CORS configuration in `server/src/index.ts`

### Cookie Not Set

- Verify `credentials: "include"` is set in fetch requests
- Check cookie settings (httpOnly, secure, sameSite)
- Ensure frontend and backend are on same origin or CORS is configured

### Session Not Persisting

- Check browser cookie settings
- Verify session expiration time
- Check backend session cleanup interval
