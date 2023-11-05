# Stage 1: Build the frontend
FROM node:14 as frontend-builder

WORKDIR /app/accenture-landing-page/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend ./
RUN npm run build

# Stage 2: Build the backend
FROM node:14 as backend-builder

WORKDIR /app/accenture-landing-page/backend

COPY backend/package*.json ./
RUN npm install

COPY backend ./

# Copy the built frontend from the previous stage
COPY --from=frontend-builder /app/accenture-landing-page/frontend/build /app/accenture-landing-page/frontend/build

# Expose port for backend (adjust if necessary)
EXPOSE 3001

CMD ["node", "server.js"]
