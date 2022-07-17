FROM node:alpine

WORKDIR /app

COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development"]; \
    then npm install; \
    else npm install --only=production; \
    fi

COPY . .

ENV PORT 4200

EXPOSE $PORT

CMD /app/node_modules/.bin/ng serve --host 0.0.0.0 --disable-host-check