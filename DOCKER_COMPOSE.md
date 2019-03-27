# Docker Compose Notes

## base docker-compose file
In file docker-compose.yaml are specified all base configuration:
for each app are specified:
+ the environment variable PORT with the listening port
+ the port binding

for the mainApp are specified the enviroment variables:
+ POLITE_SERIVCE_URL: url of polite serivce
+ USERS_SERVICE_URL: url of users service

Note that the port in these urls are specified according with PORT variable specified in
polite and users app

All enviroment variables specified in this configuration are declared in the Dockerfile
of each container.
For example in politeService DockerFile:
```bash
ARG PORT
ENV PORT ${PORT}
```

## dev docker-compose file

In file docker-compose-dev.yaml are specified only dev
options:
+ volume: mount src folder to enable file watching
+ CMD: run watch script

this file is not exhaustive, it have to be composed with
docker-compose.yaml file.
The way to copose these file is:
```bash
docker-compose -f docker-compose.yaml -f docker-compose-dev.yaml up
```

note that the order of .yaml files is important, the last overwrite options defined 
in the first.
