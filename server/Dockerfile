FROM node:20-buster-slim

WORKDIR /server

COPY package.json .

COPY package-lock.json .

RUN npm install -g nodemon

RUN npm install

COPY . .

EXPOSE 3000

CMD ["nodemon"]