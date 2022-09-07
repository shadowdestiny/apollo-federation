FROM node:14-alpine as nodejs

WORKDIR /usr/src/app

RUN mkdir -p /app && chown node: /app

RUN npm install -g prisma \
    && npm install -g @2fd/graphdoc \
    && npm i nodemon -g

RUN apk add --no-cache bash

# Todo: not needed at this time for a dockerfile dev
#EXPOSE 8080

#CMD ["npm","run","init"]
