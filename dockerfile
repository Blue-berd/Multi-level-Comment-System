FROM node:20

WORKDIR /app
# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./
# Install dependencies
RUN yarn install

COPY src ./src

COPY .env .env

# Expose the port the app runs on
EXPOSE 5000

# Define the command to start the app
CMD ["yarn", "start"]

