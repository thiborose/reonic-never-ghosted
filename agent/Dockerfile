# VoltAgent service: reads quote/customer/calendar context and recommends
# the next best action via OpenRouter. Hono server on port 3141.
FROM node:24-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 3141

CMD ["npm", "run", "start"]
