#!/bin/bash

# Cambiar el propietario de la carpeta node_modules
chown -R 1000:1000 /usr/src/api/node_modules
#chown -R 1000:1000 /usr/src/api/dist

# Ejecutar el comando principal (en este caso, el comando npm)
exec "$@"
