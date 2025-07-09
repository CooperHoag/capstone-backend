DROP TABLE IF EXISTS user_ratings;
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id serial PRIMARY KEY,
  username text NOT NULL UNIQUE,
  password text NOT NULL,
  bio TEXT
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  genre VARCHAR(50) NOT NULL,
  runtime INT, 
  release_year DATE,
  director VARCHAR(50),
  movie_poster TEXT,
  plot_summary TEXT
);

CREATE TABLE user_ratings (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  movie_id INT REFERENCES movies(id) ON DELETE CASCADE,
  rating INT CHECK (rating >= 1 AND rating <= 5)
);