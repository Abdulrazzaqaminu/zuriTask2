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
`GET /api/64ff783848982a8579629d40`

# Parameter
person_id (string, required): The unique identifier of the person to retrieve.

# Request Body
name (string, required): The name of the person.

# Example Request
`POST /api/64ff783848982a8579629d40`
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
    "_id": "64ff783848982a8579629d40",
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
  "Message": "person_id = 64ff783848982a8579629d40"
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
`PUT /api/64ff783848982a8579629d40`
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
`DELETE /api/64ff783848982a8579629d40`

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
