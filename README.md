## Docker, along with CI/CD and Redux, is one of the most important skills I must learn in addition to everything else I have learned.

This is a full-stack node-express-react-postgres application, made with Docker Compose (version 3.1).

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
-----------------------

1. "npm init":
- initializes a new Node.js project
- creates a package.json file, which contains metadata about the project (name, version, and dependencies)
2. "npm install":
- installs dependencies listed in the package.json file
- When you run "npm install," it looks for the dependencies in the package.json file and installs them in a folder called "node_modules", which contains all the packages and modules required by the project.
3. "touch index.js" creates an index.js file.
4. The file which contains all the instructions for how to run the app is called Dockerfile.
5. Dockerfiles vs Docker-compose.yaml:
  - Dockerfile.dev and Dockerfile.prod are specific to Docker image building, with the former being tailored for development environments and the latter for production.
  - docker-compose.yaml is a broader configuration file used to define and run multi-container Docker applications, including both development and production environments.
6. Dockerfile sample structure:
- FROM
- WORKDIR
- COPY
- EXPOSE
- RUN
- CMD
7. Create the image: docker build -t api .
8. Run the container from the image: docker run -d -p 8080:8080 api
9. docker container ls (all running containers)
10. npm create vite@latest

-------------------------------

The coolest thing --- docker-compose.yaml:
- The orchestrator of our app, which runs everything in one go.
- tabbing and spacing is very important, otherwise it'll yell at you.
<br />

Sample structure:
- version:
- services:
  - db:
    - image:
    - environment:
    - ports:
    - volumes:
  - server:
    - build:
    - ports:
  - frontend:
    - build:
    - ports:

Go to root directoty:
```
docker-compose up
```
I would opt for compose, especially in production-level applications.
