#!/bin/bash
docker container run --rm \
    -it \
    -p 3000:3000 \
    -v `pwd`:/var/app \
    node:10.14.2-alpine \
    sh -c "cd /var/app && /bin/sh"