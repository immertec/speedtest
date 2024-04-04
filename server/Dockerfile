# Use the official Node.js 18 image from Docker Hub
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the project dependencies
RUN npm install
RUN openssl req -x509 -newkey rsa:4096 -nodes -keyout private.key -out certificate.crt -days 365 \
    -subj "/C=US/ST=State/L=City/O=Organization/OU=Unit/CN=localhost"

# Copy the rest of the project files
COPY . .

# Start the application
CMD ["node", "index.js"]