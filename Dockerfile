FROM node:alpine AS app-build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=app-build usr/src/app/dist/general-information usr/share/nginx/html
EXPOSE 80