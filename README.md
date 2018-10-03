# NowTV React Chat Concept (DEPLOYMENT IMPLEMENTATION)

## Dockerize
One way to deploy the app is to create a docker container. This can be a lightweight nginx container serving contents within build folder after running `npm run build`. From the [Dockerfile](Dockerfile) in this project we can create a container called <i>nowtv-app</i>
```bash
docker build -t nowtv-app .
docker run -p 80:80 nowtv-app # run app locally on port 80
```
Navigating to `localhost:80` will display the app. The <i>nowtv-app</i> container can be deployed on AWS's Elastic Beanstalk for example.
