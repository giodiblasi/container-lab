# This is a lab for my experiments on Docker and Kubernetes

I have two service
+ Polite Service: Given a name it greets
+ Users Service: it returns the name of specified userId

## Polite Service
```bash
> curl http://<url>/Tom/hello
> Hy Tom!
````
 ## Users Service
 ```bash
 > curl http://<url>/1/name
 > Tom
 ```

## Main App
I have a main app that compose two services
```bash
 > curl http://<url>/1/sayhello
 > Hy Tom!
 ```
## The Goal
the goals is compose these services using Docker and Kubernetes

