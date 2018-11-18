# Use an official Python runtime as a parent image
# FROM python:2.7-slim
FROM node:10
# Set the working directory to /app

#WORKDIR /app
WORKDIR /usr/src/app


# Copy the current directory contents into the container at /app
# COPY . /app
COPY package*.json ./
# Install any needed packages specified in requirements.txt

RUN npm install --only=production
COPY ./client ./client
COPY ./client/package*.json ./client/
RUN cd ./client && npm install  && npm run build
#RUN
#RUN npm run build
COPY . .
COPY ./client/*/* ./client/

# Make port 8081 available to the world outside this container
EXPOSE 8082

# Define environment variable
#ENV NAME World

# Run app.py when the container launches
CMD [ "npm", "start" ]
#CMD ["python", "app.py"]