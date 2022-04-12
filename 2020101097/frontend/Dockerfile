FROM node:latest


WORKDIR '/frontend'

COPY --chown=node:node package.json package-lock.json ./

ENV PORT 3000

RUN npm install

COPY --chown=node:node . .

USER node


CMD ["npm", "start"]