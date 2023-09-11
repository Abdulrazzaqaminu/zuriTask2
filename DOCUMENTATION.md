# API Documentation

## Overview

[A simple REST API capable of CRUD operations on a "person" resource with just a "name" field.]

#### ENDPOINTS

## API Base URL
The base URL for all API endpoints is: `https://zuriTask2.onrender.com/api`


### 1. Get A Person By ID

## Description
Get a specific person's information by their person_id.

# Endpoint url
`GET /api/:person_id`

# Example Request
`GET /api/64ff40ab3add68d1c47b2a36`

# Parameter
person_id (string, required): The unique identifier of the person to retrieve.

# Request Body
name (string, required): The name of the person.

# Example Request
`POST /api/64ff40ab3add68d1c47b2a36`
Content-Type: application/json
{
  "name": "Abdulrazzaq"
}

## Response

# HTTP Status Codes
`200 OK: Successfully retrieved.`
`400 Bad Request: Name field is missing.`
`400 Not Found: Invalid mongoose ObjectID.`
`404 Not Found: person not found.`

# Successful Response Body
{
  "Message": {
    "_id": "64ff40ab3add68d1c47b2a36",
    "name": "Abdulrazzaq",
  }
}

## 400 Bad Requests
# Error Response:
{
  "Message": "Invalid person_id"
}

# Error Response (400 Bad Request):
{
  "Message": "Name field is missing"
}

## 404 Not Found
# Error Response:
{
  "Message": "person not found"
}


### 2. Get All People

## Description
Get a list of all people.
`GET /api`

# Example Request
`GET /api`

## Response

# HTTP Status Codes
`200 OK: Successfully retrieved.`
`400 Bad Request: Either remove name or add person_id.`

# Successful Response Body (JSON)
{
  "Message": [
    {
      "_id": "64ff40ab3add68d1c47b2a36",
      "name": "Abdulrazzaq",
    },
    {
      "_id": "64ff43203add68d1c47b2a38",
      "name": "Abdul",
    }
  ]
}

# Error Response (400 Bad Request):
{
  "Message": "Either remove name or add person_id"
}

# Error Response (404 Not Found):
{
  "Message": "No people"
}


### 3. Create New person

## Description
Create a new people record.

# Endpoint URL
`POST /api`

# Request Body
`name (string, required): The name of the person.`

# Example Request
`POST /api`
Content-Type: application/json
{
  "name": "Abdulrazzaq"
}

## Response

# HTTP Status Codes
`200 OK: Successfully created a person.`
`400 Bad Request: Name field is missing.`

# Successful Response Body (JSON):
{
  "Message": "person_id = 64ff40ab3add68d1c47b2a36"
}

# Error Response (400 Bad Request):
{
  "Message": "Name field is missing"
}


### 4. Update A person

## Description
Update a people name by their person_id.

# Endpoint URL
`PUT /api/:person_id`

# Example Request
`PUT /api/64ff40ab3add68d1c47b2a36`
Content-Type: application/json
{
  "name": "Abdul"
}

# Parameter
person_id (string, required): The unique identifier of the person to retrieve.

# Request Body
`name (string, required): The new name of the person.`

## Response

# HTTP Status Codes
`200 OK: Successfully updated person.`
`400 Bad Request: Name field is missing.`
`400 Not Found: Invalid mongoose ObjectID.`
`404 Not Found: person not found.`

# Successful Response Body (JSON):
{
  "Message": "Name updated from <old_name> to <new_name>"
}

## 400 Bad Requests
# Error Response:
{
  "Message": "Invalid mongoose person_id"
}

# Error Response (400 Bad Request):
{
  "Message": "Name field is missing"
}

## 404 Not Found
# Error Response (404 Not Found):
{
  "Message": "person Not Found"
}


### 5. Delete A person

## Description
Remove a person by their person_id.

# Endpoint URL
`DELETE /api/:person_id`

# Example Request
`DELETE /api/64ff40ab3add68d1c47b2a36`

# Parameter
person_id (string, required): The unique identifier of the person to retrieve.

## Response

# HTTP Status Codes
`200 OK: Successfully deleted person.`
`400 Not Found: Invalid mongoose ObjectID.`
`404 Not Found: person not found.`

# Error Response (400 Bad Requests):
{
  "Message": "Invalid person_id"
}

# Error Response (404 Not Found):
{
  "Message": "person Not Found"
}


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