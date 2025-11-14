# Docker Setup for Tripr

This directory contains Docker configuration files for optimized containerization.

## Quick Start

### Build and run with Docker Compose

```bash
docker-compose up -d
```

### Build manually

```bash
docker build -t tripr:latest .
docker run -p 8081:80 tripr:latest
```

### Open in browser

http://localhost:8081/

## Image Optimization Techniques Used

1. **Multi-stage builds**: Separates build dependencies from runtime
2. **Alpine Linux**: Minimal base image (~5MB for nginx:alpine)
3. **Layer caching**: Optimized COPY order for better cache hits
4. **.dockerignore**: Excludes unnecessary files from build context
5. **Nginx**: Lightweight web server for serving static files
6. **Gzip compression**: Enabled for better performance
7. **Security headers**: Added for better security

## Image Sizes

- **Standard build**: ~50-60MB (nginx:alpine + built assets)
- **With docker-slim**: ~30-40MB (after optimization)

## Further Optimization

### Using docker-slim

```bash
# Install docker-slim first
# Then run:
docker-slim build --target tripr:latest
```

## Environment Variables

The app runs in production mode by default. No environment variables are required for basic operation.

## Health Checks

The container includes a health check that verifies the web server is responding:

```bash
docker inspect --format='{{.State.Health.Status}}' tripr-app
```

## Production Deployment

For production, consider:

- Using a reverse proxy (Traefik, Caddy, etc.)
- Adding SSL/TLS certificates
- Setting up monitoring and logging
- Using orchestration (Kubernetes, Docker Swarm)
