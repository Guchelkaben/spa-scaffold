
[![Build Status](https://travis-ci.com/Guchelkaben/spa-template.svg?branch=master)](https://travis-ci.com/Guchelkaben/spa-template)

# SPA-Template

## Stack

 - Frontend: HTML, CSS, PUG, Vue
 - Backend: Java

## Docker

Running DockerFile:

We use a ssh-key to deploy our application in lightsail. To do this, we need to add our key to dockerfile. Please, follow the next steps to accomplish to deploy to our lightsail instance.

 1. First enable buildkit with export DOCKER_BUILDKIT=1  
 2. DOCKER_BUILDKIT=1 docker build --no-cache --secret id=sshkey,src=sshkey.pem -t deploy-lighthouse .