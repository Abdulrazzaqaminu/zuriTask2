### LOCAL DEVELOPMENT

## Clone Repository:
`git clone <repository_url>`
`cd <project_directory>`
## Install Dependencies:
`npm install`
# or
`yarn install`
## Enrivonmental Variables
Ensure you have any necessary environment variables set up for your application. This might include database connection strings, server port number.
## Transpile TypeScript to JavaScript:
Ensure you have a tsconfig.json file set up for your TypeScript project. And configure it besed on your application
`tsc --init`
# then
`npm run build`
# or
`yarn build`
## Start the Development Server:
Start the development server to run your TypeScript API locally.


### DEPLOYMENT (USING RENDER):

## Create a Redner account
If you haven't already, sign up for a Render account at https://render.com.
## Login to Redner Dashboard
Log in to your Render account and access the Render dashboard.
## create a new service
In the Render dashboard, click the "Create New" button and select "Web Service."
## Configure deployment settings
Choose your Git repository and branch that you want to deploy.
Render will automatically detect Node.js as your build environment.
## Specify envirenmental variables
Set any environment variables you need under the "Environment" section in Render. This can include your MongoDB connection URL or any other secrets.
## Configure Web Traffic Settings:
Specify the domain name for your API.
## Build command
In the "Build Command" field, specify the command to build your TypeScript application. Typically, this involves running the TypeScript compiler (tsc) to transpile your code to JavaScript before starting the server.
Make sure your project's package.json includes these scripts and dependencies `{"build": "tsc"}`
## start command
In the "Start Command" field, specify the command to start your Express.js server. This should be the command you use to start your server locally.
## Deploy
