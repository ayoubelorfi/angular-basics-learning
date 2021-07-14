FROM node

ENV HOME=/usr/src/app
RUN mkdir -p $HOME
WORKDIR $HOME

RUN yarn global add @angular/cli

EXPOSE 4201

USER 1000