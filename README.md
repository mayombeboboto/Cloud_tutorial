# DOCKER TUTORIAL

**********
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
    	* E.g:  docker exec -it 7304d20f6d4c redis-cli.
        	docker exec -it container-id psql -U Postgres

* docker exec -it container-id sh: logins to your terminal access in the container context! 
  Please note: it is SH and not SSH!!!!!

* docker run -it image-name sh: Allows you to login to the container. 
    N.B: If you run the same command on 2 separate terminals, you'll get 2 different containers.
         Therefore, editing one of them will not affect the other.

**********
* docker build . : to build a docker image. Mind well, you need to be in the correct dir and have a Dockerfile.
    * The “.” Is what is called a BUILD CONTEXT.
    	* E.g: ~/cloud_training/udemy/redis-image

* docker build -t userid/project-name:version .: this helps you create a tag for your image
    * N.B: the last portion ":..." like ":1.0" is our case is optional. That said, when omitted, it defaults to "latest"
    	* docker build -t gradie/busybox:1.0 .
    

* docker run -p incoming_port:port_inside_container <image-id>: this maps the incoming port from the OS 
  to the port inside your container image
    * Make sure the port number corresponds to your index.js!
    	* E.g: docker run -p 9008:8080 gradie/simpleweb










