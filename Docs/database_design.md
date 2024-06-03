# Database Design Documentation

## Welcome to the Database design documentation for the [Your Project Name] app

### User Tables

| Column        | Type      | Description                 |
|---------------|-----------|-----------------------------|
| user_id       | INT       | User identifier             |
| username      | VARCHAR   | User's username             |
| email         | VARCHAR   | User's email address        |
| password_hash | VARCHAR   | Hashed password             |
| created_at    | TIMESTAMP | Timestamp of account creation |
| updated_at    | TIMESTAMP | Timestamp of last update    |

### Session Tables

| Column       | Type      | Description                   |
|--------------|-----------|-------------------------------|
| session_id   | INT       | Session identifier            |
| user_id      | INT       | User identifier               |
| start_time   | DATETIME  | Start time of the session     |
| end_time     | DATETIME  | End time of the session       |
| duration     | INT       | Duration of the session (in minutes) |

### Bookmark Tables

| Column          | Type      | Description                        |
|-----------------|-----------|------------------------------------|
| bookmark_id     | INT       | Bookmark identifier                |
| user_id         | INT       | User identifier (foreign key)      |
| movie_id        | INT       | Movie identifier (foreign key)     |
| show_id         | INT       | TV show identifier (foreign key)   |
| bookmark_type   | VARCHAR   | Type of bookmark (movie or TV show)|

### Movie Table

| Column        | Type      | Description                 |
|---------------|-----------|-----------------------------|
| movie_id      | INT       | Movie identifier            |
| title         | VARCHAR   | Title of the movie          |
| poster        | VARCHAR   | Poster of the Movie         |
| synopsis      | VARCHAR   | Description of the movie    |
| release_date  | DATE      | Release date of the movie   |
| genre         | VARCHAR   | Genre of the movie          |
| rating        | VARCHAR   | Movie rating                |

### TV Shows Table

| Column        | Type      | Description                 |
|---------------|-----------|-----------------------------|
| show_id       | INT       | TV show identifier          |
| title         | VARCHAR   | Title of the TV show        |
| poster        | VARCHAR   | Poster of the Show          |
| synopsis      | VARCHAR   | Description of the Show     |
| release_date  | DATE      | Release date of the TV show |
| genre         | VARCHAR   | Genre of the TV show        |
| rating        | VARCHAR   | TV show rating              |

### Database Relationships

#### User and Session
- A user can have multiple sessions.
- **User Table:**
  - Primary Key: `user_id`
- **Session Table:**
  - Foreign Key: `user_id` (References `user_id` in User table)
- **Relationship:** One-to-Many (One user can have multiple sessions, but each session belongs to only one user.)

#### Movie and Category
- A movie can belong to multiple categories.
- A category can have multiple movies.
- **Movie Table:**
  - Primary Key: `movie_id`
- **Category Table:**
  - Primary Key: `category_id`
- **Relationship:** Many-to-Many (A movie can belong to multiple categories, and a category can have multiple movies.)

#### TV Show and Category
- A TV show can belong to multiple categories.
- A category can have multiple TV shows.
- **TV Show Table:**
  - Primary Key: `show_id`
- **Category Table:**
  - Primary Key: `category_id`
- **Relationship:** Many-to-Many (A TV show can belong to multiple categories, and a category can have multiple TV shows.)

