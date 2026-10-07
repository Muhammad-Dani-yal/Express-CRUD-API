# Express CRUD API

A simple RESTful CRUD API built with **Node.js** and **Express.js** for managing user data.

This project demonstrates the core concepts of backend development, including routing, request handling, validation, HTTP status codes, and basic CRUD operations.

## Features

- Get all users
- Get a user by ID
- Create a new user
- Update an existing user
- Delete a user
- Basic input validation
- Basic email validation
- JSON request handling
- Proper HTTP status responses
- Dynamic port support using environment variables

## Tech Stack

- Node.js
- Express.js
- JavaScript

## API Endpoints

### Get All Users

```http
GET /users
```

Returns all users stored in the application.

### Get User by ID

```http
GET /users/:id
```

Returns a specific user based on the provided ID.

Example:

```text
/users/1
```

### Create User

```http
POST /users
```

Example request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Update User

```http
PUT /users/:id
```

Example request body:

```json
{
  "name": "John Smith",
  "email": "johnsmith@example.com"
}
```

### Delete User

```http
DELETE /users/:id
```

Deletes the selected user based on the provided ID.

## Validation

The API includes basic validation for:

- User IDs
- Required name fields
- Required email fields
- Basic email format

Invalid requests return appropriate error responses.

## Data Storage

This project currently uses an **in-memory JavaScript array** to store user data.

Because no database is connected, data will reset whenever the server restarts.

A database such as MongoDB can be integrated in a future version.

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/Muhammad-Dani-yal/Express-CRUD-API.git
```

### 2. Navigate to the project

```bash
cd Express-CRUD-API
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node index.js
```

The server runs on:

```text
http://localhost:5000
```

If a `PORT` environment variable is provided, the application will use that port instead.

## Testing the API

You can test the API using **Postman**.

Example:

```text
GET http://localhost:5000/users
```

For POST and PUT requests:

1. Open Postman
2. Select the request method
3. Enter the endpoint
4. Open **Body**
5. Select **raw**
6. Select **JSON**
7. Enter the request body
8. Send the request

## What I Practiced

Through this project, I practiced:

- Express routing
- REST API design
- CRUD operations
- Request parameters
- Request bodies
- JSON middleware
- Input validation
- HTTP status codes
- Backend testing with Postman
- Git and GitHub workflow

## Future Improvements

Possible improvements include:

- MongoDB integration
- Mongoose schemas
- Authentication and authorization
- Centralized error handling
- Controllers and route separation
- Environment configuration
- API documentation
- Automated testing

## Author

**Muhammad Daniyal**

Junior Software Developer focused on frontend, mobile, and backend development.
