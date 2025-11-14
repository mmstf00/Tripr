# Authentication Setup Guide

This guide explains how to set up Google OAuth authentication for the Tripr application.

## Overview

Tripr uses Google OAuth 2.0 for user authentication. Users can sign in with their Google accounts to access protected features of the application.

## Prerequisites

- A Google account
- Access to [Google Cloud Console](https://console.cloud.google.com/)

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click "New Project"
4. Enter a project name (e.g., "Tripr App")
5. Click "Create"

## Step 2: Enable Google+ API

1. In the Google Cloud Console, navigate to "APIs & Services" → "Library"
2. Search for "Google+ API" or "Google Identity"
3. Click on "Google Identity Services API" or "Google+ API"
4. Click "Enable"

## Step 3: Create OAuth 2.0 Credentials

1. Navigate to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. If prompted, configure the OAuth consent screen:

   - Choose "External" (unless you have a Google Workspace)
   - Fill in the required information:
     - App name: "Tripr"
     - User support email: Your email
     - Developer contact information: Your email
   - Click "Save and Continue"
   - Add scopes (optional): `email`, `profile`, `openid`
   - Click "Save and Continue"
   - Add test users if needed (for development)
   - Click "Save and Continue"
   - Review and click "Back to Dashboard"

4. Create OAuth Client ID:
   - Application type: "Web application"
   - Name: "Tripr Web Client"
   - Authorized JavaScript origins:
     - `http://localhost:8080` (for development)
     - `https://yourdomain.com` (for production)
   - Authorized redirect URIs:
     - `http://localhost:8080` (for development)
     - `https://yourdomain.com` (for production)
   - Click "Create"
   - **Copy the Client ID** (you'll need this)

## Step 4: Configure Environment Variables

1. Create a `.env` file in the root directory of the project:

```bash
VITE_GOOGLE_CLIENT_ID=your-client-id-here.apps.googleusercontent.com
```

2. Replace `your-client-id-here.apps.googleusercontent.com` with your actual Client ID from Step 3.

3. **Important**: Never commit the `.env` file to version control. It should already be in `.gitignore`.

## Step 5: Restart Development Server

After adding the environment variable, restart your development server:

```bash
npm run dev
# or
bun dev
```

## How It Works

1. **User clicks "Continue with Google"** on the login page
2. **Google OAuth popup opens** for user authentication
3. **User grants permissions** to the application
4. **Application receives access token** from Google
5. **Application fetches user info** using the access token
6. **User data is stored** in localStorage
7. **User is redirected** to the home page

## Protected Routes

The following routes require authentication:

- `/country-select`
- `/city-select/:countryId`
- `/swipe/:countryId`
- `/route-results`

If a user tries to access these routes without being authenticated, they will be redirected to `/login`.

## User Data Storage

User information is stored in localStorage:

- User profile (id, email, name, picture)
- Access token

## Logout

Users can log out by:

1. Clicking on their avatar/profile picture
2. Selecting "Log out" from the dropdown menu

This will clear all stored authentication data and redirect to the home page.

## Troubleshooting

### "Invalid client ID" error

- Verify that your `VITE_GOOGLE_CLIENT_ID` in `.env` matches the Client ID from Google Cloud Console
- Ensure there are no extra spaces or quotes in the `.env` file
- Restart the development server after changing `.env`

### "Redirect URI mismatch" error

- Verify that `http://localhost:8080` is added to "Authorized JavaScript origins" in Google Cloud Console
- Ensure the redirect URI in Google Cloud Console matches exactly (including `http://` vs `https://`)

### OAuth popup blocked

- Check browser popup blocker settings
- Ensure the domain is added to authorized origins in Google Cloud Console

### Token expired

- The access token may expire. The application will prompt users to log in again if needed.

## Production Deployment

For production:

1. Update authorized origins and redirect URIs in Google Cloud Console to include your production domain
2. Set the `VITE_GOOGLE_CLIENT_ID` environment variable in your production environment
3. Ensure your production domain uses HTTPS (required by Google OAuth)

## Security Notes

- Never expose your OAuth Client Secret in the frontend (it's not needed for this implementation)
- The Client ID is safe to expose in the frontend code
- Access tokens are stored in localStorage (consider using httpOnly cookies for production with a backend)
- For enhanced security in production, consider implementing token refresh logic
