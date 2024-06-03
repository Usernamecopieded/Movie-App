# Entertainment App API Documentation

## Introduction

Welcome to the Entertainment App API documentation. This API allows you to access various features related to movies, TV shows, and user-related functionalities. Below is a comprehensive guide on how to use the API.

## Base URL


## Authentication

To access protected endpoints, you need to include your API key in the request headers.

### Set API Key

Include the API key in the `Authorization` header of your requests.

```plaintext
Authorization: Bearer YOUR_API_KEY
Replace YOUR_API_KEY with your actual API key.

Users
Register User
Endpoint: POST /users/register

Description: Register a new user.

Request:

Body:
username (string): User's username.
email (string): User's email address.
password (string): User's password.
Response:

Status: 201 Created
Body:
{
  "user_id": 123,
  "username": "john_doe",
  "email": "john@example.com",
  "created_at": "2024-01-12T12:30:45Z",
  "updated_at": "2024-01-12T12:30:45Z"
}
Login User
Endpoint: POST /users/login

Description: Log in an existing user.

Request:

Body:
email (string): User's email address.
password (string): User's password.
Response:

Status: 200 OK
Body:
{
  "user_id": 123,
  "username": "john_doe",
  "email": "john@example.com"
}
Validate User
Endpoint: GET /users/validate

Description: Validate user credentials and retrieve user information.

Request:

Headers:
Authorization: Bearer YOUR_API_KEY
Response:

Status: 200 OK
Body:

{
  "user_id": 123,
  "username": "john_doe",
  "email": "john@example.com"
}
Bookmarks
Get Bookmarks
Endpoint: GET /bookmarks

Description: Get a list of bookmarks for the authenticated user.

Request:

Headers:
Authorization: Bearer YOUR_API_KEY
Response:

Status: 200 OK
Body:

[
  {
    "bookmark_id": 1,
    "title": "Inception",
    "type": "movie",
    "user_id": 123
  },
  {
    "bookmark_id": 2,
    "title": "Stranger Things",
    "type": "tvshow",
    "user_id": 123
  }
]
Set Bookmark
Endpoint: POST /bookmarks

Description: Add a new bookmark for the authenticated user.

Request:

Headers:
Authorization: Bearer YOUR_API_KEY
Body:

{
  "title": "Inception",
  "type": "movie"
}
Response:

Status: 200 OK
Body:

{
  "bookmark_id": 3,
  "title": "Inception",
  "type": "movie",
  "user_id": 123
}
Delete Bookmark
Endpoint: DELETE /bookmarks/:id

Description: Delete a bookmark for the authenticated user.

Request:

Headers:
Authorization: Bearer YOUR_API_KEY
Params:
id (string): Bookmark ID to delete.
Response:

Status: 200 OK
Body:
{
  "message": "Bookmark deleted successfully"
}
Movies
Search Movies
Endpoint: GET /movies/search

Description: Search for movies based on a query.

Request:

Query Parameters:
query (string): The search query.
Response:

Status: 200 OK
Body: List of movies matching the search query.
Popular Movies
Endpoint: GET /movies/popular

Description: Get a list of popular movies.

Request:

None
Response:

Status: 200 OK
Body: List of popular movies.
Movie Details
Endpoint: GET /movies/:id

Description: Get details of a specific movie.

Request:

Params:
id (string): Movie ID.
Response:

Status: 200 OK
Body: Details of the requested movie.
TV Shows
Search TV Shows
Endpoint: GET /tvshows/search

Description: Search for TV shows based on a query.

Request:

Query Parameters:
query (string): The search query.
Response:

Status: 200 OK
Body: List of TV shows matching the search query.
Popular TV Shows
Endpoint: GET /tvshows/popular

Description: Get a list of popular TV shows.

Request:

None
Response:

Status: 200 OK
Body: List of popular TV shows.
TV Show Details
Endpoint: GET /tvshows/:id

Description: Get details of a specific TV show.

Request:

Params:
id (string): TV show ID.
Response:

Status: 200 OK
Body: Details of the requested TV show.
