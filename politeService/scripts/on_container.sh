#!/bin/bash
user_cmd=$1
start_cmd=start
install_cmd=install
if [[ "$user_cmd" == "$start_cmd" ]]; then
    docker run --rm -v "$(pwd)":/app -w /app -p 3001:3000 node:8-alpine sh -c 'node .'
elif [[ "$user_cmd" == "$install_cmd" ]]; then
    docker run --rm -v "$(pwd)":/app -w /app node:8-alpine sh -c 'npm install'
else 
    echo "./scripts/on_container.sh [ install | start ]"
fi
