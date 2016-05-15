FROM dmitriiz/node-static
MAINTAINER Will Cameron

WORKDIR /app

COPY package.json /app/
RUN NODE_ENV=development npm install
COPY . /app
RUN NODE_ENV=production npm run build
