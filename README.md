# Cloud_tutorial

# DOCKER TUTORIAL
* Containerization is increasingly popular because containers are:
    * Flexible: Even the most complex applications can be containerized.
    * Lightweight: Containers leverage and share the host kernel.
    * Interchangeable: You can deploy updates and upgrades on-the-fly.
    * Portable: You can build locally, deploy to the cloud, and run anywhere.
    * Scalable: You can increase and automatically distribute container replicas.
    * Stackable: You can stack services vertically and on-the-fly.

* A container is launched by running an image.

* Cheat sheet
===============
## List Docker CLI commands
docker
docker container --help

## Display Docker version and info
docker --version
docker version
docker info

## Execute Docker image
docker run hello-world

## List Docker images
docker image ls

## List Docker containers (running, all, all in quiet mode)
docker container ls
docker container ls --all
docker container ls -aq


* Dockerfile defines what goes on in the environment inside your container. Access to resources like networking interfaces and disk drives is virtualized inside this environment, which is isolated from the rest of your system, so you need to map ports to the outside world, and be specific about what files you want to “copy in” to that environment.

* Add requirement.txt and app.py file to the same directory as your Dockerfile.
* Docker build -t image_name docker_file_directory.
To additionally remove any stopped containers and all unused images (not just dangling images), add the -a flag to the command:
    * docker system prune -a
* Run your image by typing:
    * docker run -p port_number image_name
    * E.g: docker run -p 4000:80 gradieimage20181209
* To run your image in the background:
    * docker run -d -p port_number image_name

Share your image
***********************
A registry is a collection of repositories, and a repository is a collection of images—sort of like a GitHub repository, except the code is already built.

* Docker login command:
    * docker login
* The notation for associating a local image with a repository on a registry is:
    * username/repository:tag
* To tag an image, type:
    * docker tag image username/repository:tag
    * E.g: docker tag gradieimage20181209 gradie/get-started:part1
* You tag an image to upload it to the repository of your choice.
* Now, push your image like this:
    * docker push username/repository:tag
    * E.g: docker push gradie/get-started:part1


Services
**********
In a distributed application, different pieces of the app are called “services.”
Services are really just “containers in production.” A service only runs one image, but it codifies the way that image runs—what ports it should use, how many replicas of the container should run so the service has the capacity it needs, and so on.

* A docker-compose.yml file is a YAML file that defines how Docker containers should behave in production.
* Run your new load balanced app
    * docker swarm init
    * docker stack deploy -c docker-compose.yml app_name
        * E.g: docker stack deploy -c docker-compose.yml myapp 
    * docker service ls: shows a list of services.
* A single container running in a service is called a task. Tasks are given unique IDs that numerically increment, up to the number of replicas you defined in docker-compose.yml.
    * docker service ps getstartedlab_web
* To take down the app and the swarm:
    * docker stack rm app name
        * docker stack rm myapp






## ==========================================================================================================================
* docker ps:  shows the currently running containers

* docker ps —all:  shows all the containers that existed. To delete them from the image cache, see “docker system prune” below.

* docker run = docker create + docker start commands
	What happens is whenever you run: "docker run", it actually first create the image then start it.

* docker start container-id:  runs the container command but not in interactive fashion.
    * Note that the command in question is the one the container ran.

* docker start -a container-id: runs your command in interactive mode.

* docker system prune: deletes all the images you have locally.
    N.B: This will delete all the images you have locally.

* docker logs container-id: Shows what was run in the container.
    E.g: Open 2 terminals, build an image like gradie/simpleweb
         Run: docker run -it gradie/simpleweb sh
         Then: On the same terminal, try out few commands such as ls and pwd

         On a different terminal, while the container is running, type: docker logs gradie/mayombe.

* docker exec -it container-id command (lesson 22): executes a command inside a container.
    * Exec: executes
    * -i: sends result to stdin
    * -t: prettifies the result
    E.g: docker exec -it 7304d20f6d4c redis-cli.
        * docker exec -it container-id psql -U Postgres

* docker exec -it container-id sh: logins to your terminal access in the container context! Please note: it is SH and not SSH!!!!!

* docker run -it image-name sh: Allows you to login to the container. 
    N.B: If you run the same command on 2 separate terminals, you'll get 2 different containers.
         Therefore, editing one of them will not affect the other.

## ==========================================================================================================================

* docker build . : to build a docker image. Mind well, you need to be in the correct dir and have a Dockerfile.
    * The “.” Is what is called a BUILD CONTEXT.
    E.g: ~/cloud_training/udemy/redis-image

* docker build -t userid/project-name:version .: this helps you create a tag for your image
    * docker build -t gradie/busybox:1.0 .
    N.B: the last portion ":..." like ":1.0" is our case is optional. That said, when omitted, it defaults to "latest"

* docker run -p incoming_port:port_inside_container <image-id>: this maps the incoming port from the OS to the port inside your container image
    E.g: docker run -p 9008:8080 gradie/simpleweb
    * Make sure the port number corresponds to your index.js!










