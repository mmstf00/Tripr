# Multi-stage build for optimized production image
ARG BUILD_VERSION=latest
ARG BUILD_DATE

# Stage 1: Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies only when needed
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copy source code
COPY . .

# Build the application
ARG NODE_ENV=production
ARG VITE_API_URL
ENV NODE_ENV=${NODE_ENV}
ENV VITE_API_URL=${VITE_API_URL}
RUN npm run build

# Stage 2: Production stage with nginx
FROM nginx:alpine

# Add metadata labels
LABEL org.opencontainers.image.title="Tripr"
LABEL org.opencontainers.image.description="Tripr Travel Planning App"
LABEL org.opencontainers.image.version="${BUILD_VERSION}"
LABEL org.opencontainers.image.created="${BUILD_DATE}"

# Copy custom nginx config
COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Health check - wget is available in nginx:alpine
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

