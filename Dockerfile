FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/login-app /usr/share/nginx/html

EXPOSE 4200

CMD [ "nginx","-g", "daemon off;" ]



