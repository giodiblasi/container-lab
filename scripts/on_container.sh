#!/bin/bash
user_cmd=$1
port_binding=$2
start_cmd=start
bash_cmd=bash
install_cmd=install
base_command="docker run --rm -v $(pwd):/app -w /app -p $port_binding"
base_image="node:8-alpine" 

if [[ "$user_cmd" == "$start_cmd" ]]; then
    $base_command  $base_image sh -c 'node .'
elif [[ "$user_cmd" == "$install_cmd" ]]; then
    $base_command $base_image sh -c 'npm install'
elif [[ "$user_cmd" == "$bash_cmd" ]]; then
   $base_command -ti $base_image sh
else 
    echo "./scripts/on_container.sh [exposedPort:internalPort] [ install | start | bash]"
fi
