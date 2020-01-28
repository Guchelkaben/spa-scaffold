# syntax=docker/dockerfile:1.0.0-experimental
FROM node:12.14.0

#Environemnts
ARG LIGHTSAIL_HOST=3.125.196.25
ARG LIGHTSAIL_USER=bitnami
ARG DEPLOY_ENV=AWS

# install nuxt to generate static content
COPY ./app/. /app/
COPY ./scripts/deploy.sh /scripts/deploy.sh

# install nuxt to generate static content
RUN npm install -g nuxt \
    && npm install --prefix /app/ \
    && npm run --prefix /app/ generate

RUN --mount=type=secret,id=sshkey,dst=/tmp/sshkey.pem \
    scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i /tmp/sshkey.pem -r /app/dist/* $LIGHTSAIL_USER@$LIGHTSAIL_HOST:/home/$LIGHTSAIL_USER/stack/nginx/html/