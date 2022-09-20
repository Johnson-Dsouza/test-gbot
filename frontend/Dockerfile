#Base image
FROM node:16

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json /app/

#npm ci bypasses a package’s package.json to install modules from a package’s lockfile.
RUN npm ci

# Bundle app source
COPY . .

#Mapping app to port 8080
EXPOSE 8080

#command to run
CMD [ "npm", "start" ]
