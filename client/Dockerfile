FROM node:8

WORKDIR /usr/src/app

ENV text_param ""

COPY package*.json ./

RUN npm install

COPY . .

CMD ["sh", "-c", "node client.js ${text_param}"]
