FROM node:18.17.1

# Create app directory
RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

# Set ownership of /root/.npm directory
RUN chown -R 1000:1000 /root/.npm

# Installing dependencies
COPY package*.json ./
RUN npm install

COPY . .

# Activate shell
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Port
EXPOSE 8080

VOLUME ["/usr/src/api/node_modules"]

# Running the app into development environment
#CMD ["npm", "run", "dev"]

# Running the app into production environment
CMD ["npm", "run", "prod"]