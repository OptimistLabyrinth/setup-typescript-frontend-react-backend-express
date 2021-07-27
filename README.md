# React Typescript Frontend + Express Server Deploy

- frontend App is in the 'frontend' directory and backend Server is in the 'backend' directory
- frontend: setup webpack from scratch as if it works like create-react-app
- backend: setup from scratch as if it started from 'express-generator' typescript version
- express-static of backend is 'frontend/builid' directory which contains the result of frontend build process which is executed with CLI command 'npm run build' inside frontend directory

<br />

***

<br />

## How to Deploy App

git clone this repository and move into the project root directory

```shell
$ git clone https://github.com/OptimistLabyrinth/setup-typescript-frontend-react-backend-express.git
$ cd setup-typescript-frontend-react-backend-express
$ npm start
```

It will automatically build frontend app and start backend server

To check if it's working, open your favorite web browser and go to 'http://localhost:4000/'

<br />

***

<br />

## Frontend Webpack-dev-server

if you want to edit frontend only, then move into the 'frontend' folder and start webpack-dev-server.

- Hot Module Replacement and Live Reloading is enabled by default.

```shell
$ cd setup-typescript-frontend-react-backend-express
$ npm run frontend-dev-server
```

To check if webpack-dev-server is working properly, open your favorite web browser and go to 'http://localhost:3000/'
