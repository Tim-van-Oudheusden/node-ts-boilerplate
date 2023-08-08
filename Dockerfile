FROM node:19.2.0-alpine3.15
WORKDIR /usr/code

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY nodemon.json .
COPY index.js .

RUN npm ci
ENV NODE_ENV=production PORT=80

COPY ./src /usr/code/src

RUN npm run build

RUN apk update
RUN apk add curl

CMD [ "node", "dist/server.js" ]
