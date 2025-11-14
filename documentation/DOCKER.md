# Docker Setup for Tripr

This document describes how to run Tripr with Docker and Docker Compose, including both frontend and backend services.

## Quick Start

1. **Copy environment file:**

   ```bash
   cp docker-compose.env.example .env
   ```

2. **Edit `.env` file** and set your Google OAuth Client ID:

   ```env
   GOOGLE_CLIENT_ID=your-google-client-id-here.apps.googleusercontent.com
   ```

3. **Build and start services:**

   ```bash
   docker-compose up --build
   ```

4. **Access the application:**
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3001

## Architecture

The Docker setup includes:

- **Frontend Service**: React app served by nginx

  - Port: 8080 (configurable via `FRONTEND_PORT`)
  - Proxies `/api/*` requests to backend

- **Backend Service**: Express.js API server
  - Port: 3001 (configurable via `BACKEND_PORT`)
  - Handles authentication and session management

Both services run on a shared Docker network (`tripr-network`) for internal communication.

## Environment Variables

### Required Variables

- `GOOGLE_CLIENT_ID`: Your Google OAuth 2.0 Client ID

### Optional Variables

- `NODE_ENV`: Environment mode (default: `production`)
- `FRONTEND_PORT`: Frontend port mapping (default: `8080`)
- `BACKEND_PORT`: Backend port mapping (default: `3001`)
- `FRONTEND_URL`: Frontend URL for CORS (default: `http://localhost:8080`)
- `VITE_API_URL`: Backend API URL for frontend (default: `http://localhost:3001`)
- `BUILD_VERSION`: Build version tag (default: `latest`)
- `BUILD_DATE`: Build date (auto-generated)

## Production Deployment

### Build and Run

```bash
# Build images
docker-compose build

# Start services in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Health Checks

Both services include health checks:

- **Backend**: `GET /health` endpoint
- **Frontend**: nginx health check

Check service health:

```bash
docker-compose ps
```

## Development Mode

For development with hot reload, use the development override:

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

This mounts source code as volumes for live reloading.

## Networking

### Internal Communication

Services communicate via Docker network:

- Frontend nginx proxies `/api/*` to `http://backend:3001`

### External Access

- Frontend: `http://localhost:8080` (or configured port)
- Backend: `http://localhost:3001` (or configured port)

## API Proxy Configuration

The nginx configuration in `.docker/nginx.conf` proxies all `/api/*` requests to the backend service:

```nginx
location /api {
    proxy_pass http://backend:3001;
    # ... proxy headers
}
```

This means:

- Frontend makes requests to `/api/auth/login` (relative path)
- Nginx proxies to `http://backend:3001/api/auth/login`
- No CORS issues since requests appear to come from same origin

## Troubleshooting

### Backend not starting

1. Check backend logs:

   ```bash
   docker-compose logs backend
   ```

2. Verify environment variables:

   ```bash
   docker-compose config
   ```

3. Check if port is already in use:
   ```bash
   lsof -i :3001
   ```

### Frontend can't reach backend

1. Verify services are on same network:

   ```bash
   docker network inspect tripr_tripr-network
   ```

2. Check nginx proxy configuration
3. Verify `VITE_API_URL` is set correctly (or use relative paths)

### CORS Errors

1. Ensure `FRONTEND_URL` in backend matches actual frontend URL
2. Check backend CORS configuration in `server/src/index.ts`
3. Verify nginx proxy is working (should eliminate CORS issues)

### Cookie Issues

1. Ensure cookies are set with correct domain
2. Check `sameSite` and `secure` flags in production
3. Verify nginx proxy preserves cookies

## Building Individual Services

### Build Backend Only

```bash
cd server
docker build -t tripr-backend .
```

### Build Frontend Only

```bash
docker build -t tripr-frontend .
```

## Production Considerations

1. **Environment Variables**: Use secrets management (Docker secrets, env files, etc.)
2. **HTTPS**: Configure SSL/TLS certificates for production
3. **Database**: Replace in-memory database with persistent storage
4. **Scaling**: Use Docker Swarm or Kubernetes for multi-instance deployments
5. **Monitoring**: Add logging and monitoring solutions
6. **Backup**: Implement backup strategies for persistent data

## Updating Services

```bash
# Pull latest code
git pull

# Rebuild and restart
docker-compose up --build -d

# Or restart specific service
docker-compose restart backend
docker-compose restart frontend
```

## Clean Up

```bash
# Stop and remove containers
docker-compose down

# Remove volumes (if any)
docker-compose down -v

# Remove images
docker-compose down --rmi all
```
