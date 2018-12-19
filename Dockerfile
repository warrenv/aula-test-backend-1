FROM node:10.14.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . /usr/src/app/

CMD [ "npm", "start" ]
