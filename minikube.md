#Kubernetes tips

> minikube start
+switch to use minikube docker daemon:
 eval $(minikube docker-env)
(use eval $(minikube docker-env -u) to return to local dameon

+ build the docker image
  docker build -t giodiblasi/politeservice <srcPath>

+ create deploy named "polite"
> kubectl run polite --image=giodiblasi/politeservice --image-pull-policy=Never --port=4000

