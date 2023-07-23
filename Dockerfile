FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/index.js"]