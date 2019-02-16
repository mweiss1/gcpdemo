FROM node:10

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "src/app.js"]

