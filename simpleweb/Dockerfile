# Specify a base image
FROM node:alpine

# Specify a working directory
WORKDIR /usr/app

# Copy files to the currently workdir /usr/app
COPY ./package.json ./
# Install some dependencies
RUN npm install
COPY ./ ./
# Default command
CMD ["npm","start"]