FROM node:11

ARG LASTCOMMIT
ENV LASTCOMMIT=$LASTCOMMIT

COPY . /

RUN npm install

CMD ["npm", "start"]
