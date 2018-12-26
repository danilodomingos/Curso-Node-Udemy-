#!/bin/bash

if [ !"$(docker ps -qaf name=curso-node)" ]; then
    docker-compose down;
fi

 docker-compose run \
    --rm \
    --service-ports \
    --name curso-node \
    curso_node sh -c "clear && /bin/sh" 
             # sh -c "clear && /bin/sh" -> Comando para limpar o Terminal 
             # e attachar novamente ao console :'-(
 
 docker stop bd-curso-node;
 docker rm bd-curso-node;
 clear;