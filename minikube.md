## Kubernetes tips
# Start minikube with:
> minikube start
# switch to use minikube docker daemon:
> eval $(minikube docker-env)

(use eval $(minikube docker-env -u) to return to local dameon

# build the docker image
docker build -t giodiblasi/politeservice <srcPath>

# create deploy named "polite" based on docker image
this will create a pod with our application ( a pod could contains more than an app)
> kubectl run polite --image=giodiblasi/politeservice --image-pull-policy=Never --port=3000
+ The port is the same port configred on expressjs server
+ image-pull-policy=Never tells to kubectl to do not download image from remote registry

# To create a service (expose one or more pods):
> kubectl expose deployment/polite --type="NodePort" --port 3000
this creates a service (a port will be assigne to it), use kubectl get services to view info about it

# Query your application through minikube
+ Get minikube ip and service port with:
> $(minikube ip)
> $(kubectl get services/polite -o go-template='{{(index .spec.ports 0).nodePort}}')
+ use ip and port to access to app:
> curl http://ip:port/giovanni/hello


# Note:
+ to open a bash on pod
> kubectl exec -ti  $POD_NAME bash
+ to open minikube dashboard
> minikube dashboard

