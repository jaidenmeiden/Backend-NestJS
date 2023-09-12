# Backend with NestJS

In the root of the project you should find the file `.env.example` which must be renamed like `.env`.

## Docker Configuration

Generate images and backend containers with the following command:

```bash
$ make up
```

To restart containers:

```bash
$ make down && make prune && make up
```

## Node

<font color="orange"> The docker machine executes all the necessary commands for the project can run in a development environment</font>

```bash
$ make shell api

$ node -v
$ npm -v

# Install Node dependencies
$ npm install

# Development
$ npm run start

# Watch mode
$ npm run start:dev

# Production mode
$ npm run start:prod

# Build our application
$ npm run build

# In case you want to exit the shell you just have to type
$ exit
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Installed Libraries

[Brevo documentation](https://developers.brevo.com/reference/getting-started-1)

## Installed Libraries

```bash
$ make shell api

# Install Libraries

# https://typescript-eslint.io/getting-started
$ npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript

# https://github.com/prettier
# https://github.com/prettier/eslint-config-prettier
# https://github.com/prettier/eslint-plugin-prettier
$ npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier

# https://nodemailer.com/about/
# https://github.com/nodemailer/nodemailer
# https://www.npmjs.com/package/@types/nodemailer
$ npm install nodemailer
$ npm install --save-dev @types/nodemailer

# https://ejs.co/#docs
# https://github.com/mde/ejs
$ npm install ejs
$ npm install --save @types/ejs

# In case you want to exit the shell you just have to type
$ exit
```

# Optional Node Configuration (Without Docker)

### <span style="color: orange"> If you want to use node without Docker into the project</span>

```bash
# Install Node dependencies
$ npm install

# Compile the nestjs_micro once
$ npm run dev

# Build our application
$ npm run build

# Start our application
$ npm run start

# In case you want to exit the shell you just have to type
$ exit
```

## Server configuration

It must be located at the root of the project within the server and execute the following commands:

### First deploy

```bash

# Now let's serve our application.
$ cd /var/www/backend-nestjs
$ pm2 start pm2.config.json
# Optional instruction (Only with root user)
# $ pm2 start npm --name nestjs_micro --user www-data -- start

# Check it.
$ pm2 ls

# Addtional instructions
pm2 stop nestjs_micro
pm2 restart nestjs_micro
pm2 delete nestjs_micro

# Check if port is active
$ sudo lsof -i -P -n
$ sudo lsof -i -P -n | grep LISTEN

```

#### Create Nginx Server

List of all existing instances

```bash

# Production (nestjs.jaidenmeiden.com)
$ cd /etc/nginx/sites-available
$ sudo touch nestjs.jaidenmeiden # Copy content

$ cd /etc/nginx/sites-enabled
$ sudo ln -s /etc/nginx/sites-available/nestjs.jaidenmeiden .

$ sudo certbot --nginx -d nestjs.jaidenmeiden.com
$ sudo certbot certificates

$ sudo systemctl restart nginx
$ sudo systemctl status nginx

```

```diff
server {
    server_name nestjs.jaidenmeiden.com www.nestjs.jaidenmeiden.com;
    root /var/www/backend-nestjs/dist;
  
    if ($host = www.nestjs.jaidenmeiden.com) {
      return 301 https://nestjs.jaidenmeiden.com$request_uri;
    }
  
    location / {
      proxy_pass http://localhost:8080;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
    }

}
```

### Later accesses

```bash

# Enter to application
$ cd /var/www/backend-nestjs

# Now restart our application.
$ pm2 restart nestjs_micro

# Check it.
$ pm2 ls
$ pm2 logs

# Check if port is active
$ sudo lsof -i -P -n
$ sudo lsof -i -P -n | grep LISTEN

```

# Application access

[Development Application](http://localhost:8080)

[Production Application](https://nestjs.jaidenmeiden.com/)

## <font color="red"> Errors</font>

```diff
./src/pages/pages/contact-us.js
Attempted import error: '../../layouts/centered' does not contain a default export (imported as 'Centered').
```

Solved with:
Put instruction `export default Centered` into `contact-us.js` file

## Licencia

Copyright © 2023 Mr. Meiden.
