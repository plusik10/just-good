FROM node:14-apline

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY ./app

EXPOSE 3000

CMD [ "npm","run","start" ]