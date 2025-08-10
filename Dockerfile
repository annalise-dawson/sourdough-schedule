FROM node:20 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:20 AS production
ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

COPY --from=builder /app/public ./public

COPY --from=builder /app/server ./server

COPY --from=builder /app/server/db ./server/db

RUN mkdir /app/storage

RUN npm run knex migrate:latest

RUN npm run knex seed:run

EXPOSE 3000
CMD ["node", "dist/server.js"]
