FROM node:10.15-alpine

RUN apk add --no-cache tini

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE ${PORT:-3000}

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "index.js"]
