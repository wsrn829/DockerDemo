## Docker, along with CI/CD and Redux, is one of the most important skills I must learn in addition to everything else I have learned.

------------------------------

1. Docker is a tool that helps us set up our programming environment quickly.
2. It involves encapsulating all the dependencies required for running an app within a container.
3. Essentially, it involves enclosing a process within a container, allowing us to freeze and duplicate all the necessary steps.
4. At a certain point in time, we capture a snapshot of our system, which is called an image.
5. The beauty of a Docker image is its portability. We can easily share it with other developers, ensuring that regardless of their operating system or environment, as long as they can run Docker, they can run our app, which is pretty handy.
6. Docker containers can be likened to individual instances of our application.
7. The Dockerfile or our image acts as a set of technical specifications outlining the requirements and instructions for our app.
8. One of the key benefits of Docker is its use of containerization, a process that
- effectively isolates our application
- easy to deploy
- compatible across different platforms
- can be used in the CI/CD process.
9. Docker desktop install:
- Containers (logs, integrated terminal)
- Images
  - created from our Dockerfile
  - base images from Docker Hub
- Volumes
10. Developers all over the world can pull down these "global images" and use them to create containers.

---------------------------

### Some Docker-related terminal commands

```
docker --version
```
```
docker info
```
```
docker image ls
```
```
docker container ls --all  or  docker ps -a   (all containers)
```
```
docker container ls  (currently-running containers)
```

------------------------

### Go to Docker Hub and use an existing Postgres image instead of creating one locally.
```
docker pull postgres
```


