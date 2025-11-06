FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache nginx

COPY --from=build /app/dist /usr/share/nginx/html

COPY server ./server

COPY nginx.conf /etc/nginx/nginx.conf

COPY package*.json ./
RUN npm ci --omit=dev

RUN mkdir -p /run/nginx

EXPOSE 80 3000

CMD ["sh", "-c", "node server/index.js & nginx -g 'daemon off;'"]
