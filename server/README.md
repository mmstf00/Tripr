# Tripr Backend Server

Backend API server for Tripr travel planning application with authentication and session management.

## Features

- **Google OAuth Authentication**: Validates Google OAuth tokens and creates secure sessions
- **Session Management**: httpOnly cookie-based session management
- **User Management**: Stores user data in database
- **Token Validation**: Validates Google tokens server-side

## Setup

1. Install dependencies:

```bash
cd server
npm install
```

2. Create a `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:

```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:8080
GOOGLE_CLIENT_ID=your-google-client-id-here.apps.googleusercontent.com
```

4. Start the development server:

```bash
npm run dev
```

The server will run on `http://localhost:3001` by default.

## API Endpoints

### POST /api/auth/login

Validates Google OAuth token and creates a session.

**Request:**

```json
{
  "accessToken": "google-oauth-access-token"
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

Sets an httpOnly cookie `sessionId` for session management.

### GET /api/auth/me

Get current authenticated user from session.

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
  "accessToken": "google-oauth-access-token"
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

### GET /health

Health check endpoint.

**Response:**

```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Database

Currently uses an in-memory database. For production, replace `src/db/database.ts` with a real database implementation (PostgreSQL, MongoDB, etc.).

## Security

- Sessions are stored in httpOnly cookies (not accessible via JavaScript)
- Cookies are set with `secure` flag in production
- Sessions expire after 30 days
- Automatic cleanup of expired sessions

## Development

- **TypeScript**: Full TypeScript support
- **Hot Reload**: Uses `tsx watch` for automatic reloading
- **CORS**: Configured for frontend origin

## Production

Build the server:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Make sure to set `NODE_ENV=production` in your production environment.
