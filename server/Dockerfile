# Multi-stage build for optimized production image
ARG BUILD_VERSION=latest
ARG BUILD_DATE

# Stage 1: Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies only when needed
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

# Copy source code
COPY . .

# Build the application
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN npm run build

# Stage 2: Production stage
FROM node:20-alpine

# Add metadata labels
ARG BUILD_VERSION=latest
ARG BUILD_DATE
LABEL org.opencontainers.image.title="Tripr Backend"
LABEL org.opencontainers.image.description="Tripr Backend API Server"
LABEL org.opencontainers.image.version="${BUILD_VERSION}"
LABEL org.opencontainers.image.created="${BUILD_DATE}"

# Create app directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install production dependencies only
RUN npm ci --only=production --no-audit --no-fund

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
  adduser -S nodejs -u 1001

# Change ownership
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the server
CMD ["node", "dist/index.js"]

