FROM node:8.12.0 as base
LABEL Author=info@tatendachawanzwa.com

RUN apt-get update

RUN mkdir /app
WORKDIR /app

COPY ./package.json /app/package.json
ENV NODE_ENV production
RUN cd /app && npm i
COPY . /app
RUN npm run build

FROM nginx:1.15.4
COPY --from=base /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
