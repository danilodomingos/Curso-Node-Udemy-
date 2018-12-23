#!/bin/bash

if [ "$(docker ps -qaf name=curso_node)" ]; then
    docker start curso_node && clear;
    docker exec -it curso_node sh -c "cd /var/app && /bin/sh";
    docker kill curso_node && clear;
else
    docker container run \
    -it \
    -p 3000:3000 \
    -v `pwd`:/var/app \
    --name curso_node \
    node:10.14.2-alpine \
    sh -c "cd /var/app && npm i -g nodemon && /bin/sh"
fi