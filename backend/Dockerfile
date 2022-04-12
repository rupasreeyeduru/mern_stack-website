FROM node:16.5.0-alpine

WORKDIR '/backend'

COPY package.json package-lock.json ./

ENV PORT 4000

RUN npm install

COPY . .

CMD ["npm", "start"]