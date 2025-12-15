# ===================================================
# DOCKERFILE MULTI-STAGE AVEC TARGETS
# Pour Jenkins parallel builds
# ===================================================

# ÉTAPE 1: Installation des dépendances (layer cache)
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --silent

# ÉTAPE 2: Build de l'application
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ÉTAPE 3: TARGET DEBUG (pour développement)
FROM node:20-alpine AS debug
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 5173
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]

# ÉTAPE 4: TARGET PRODUCTION (optimisé - nginx)
FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# TARGET PAR DÉFAUT: production
FROM production
