# Use an official Node.js runtime as the base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Build the app for production
RUN npm run build

# Install serve to serve the build folder
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Start the app
CMD [ "serve", "-s", "build", "-l", "3000" ]
