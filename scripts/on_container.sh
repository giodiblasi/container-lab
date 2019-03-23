#!/bin/bash
user_cmd=$1
port_binding=$2
start_cmd=start
bash_cmd=bash
install_cmd=install
watch_cmd=watch
base_image="node:8-alpine"
base_command="docker run --rm -v $(pwd):/app -w /app"
docker_cmd=$([ ! -z "$port_binding" ] && echo "$base_command -p $port_binding" || echo $base_command)
if [[ "$user_cmd" == "$start_cmd" ]]; then
    $docker_cmd $base_image sh -c 'node .'
elif [[ "$user_cmd" == "$install_cmd" ]]; then
    $docker_cmd $base_image sh -c 'npm install'
elif [[ "$user_cmd" == "$watch_cmd" ]]; then
    $docker_cmd $base_image sh -c 'npm run watch'
elif [[ "$user_cmd" == "$bash_cmd" ]]; then
   $docker_cmd -ti $base_image sh
else 
    echo "./scripts/on_container.sh [exposedPort:internalPort] [ install | start | bash]"
fi
