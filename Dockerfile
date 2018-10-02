FROM node:8.12.0
LABEL Author=info@tatendachawanzwa.com

RUN apt-get update

RUN mkdir /app
WORKDIR /app

COPY ./package.json /app/package.json
ENV NODE_ENV production
RUN cd /app && npm i
COPY . /app
RUN npm run build
RUN npm i -g serve

CMD ["serve", "-s", "build"]