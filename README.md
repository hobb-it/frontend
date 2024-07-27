# How to run the application

## Local
Create a file ".env" and set the URL of the backend as:

`BACKEND_URL = [backend-url]`

Then run

`npm start`

Then go to `http://localhost:3000` to use the application

## Using Docker
Build the image with

`docker build --build-arg REACT_APP_BACKEND_URL=http://151.33.54.71:8080 -t hobbit-frontend .`

Run

`docker run --name hobbit_frontend --rm -e REACT_APP_BACKEND_URL=http://151.33.54.71:8080 -p 3000:3000 hobbit-frontend`

NOT CURRENTLY WORKING, localhost IN DOCKER IS NOT localhost ON YOUR MACHINE