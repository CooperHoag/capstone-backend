DROP TABLE IF EXISTS user_ratings;
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS recommended_page;

CREATE TABLE users (
  id serial PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  username text NOT NULL UNIQUE,
  password text NOT NULL,
  bio TEXT,
  profile_image_url TEXT
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  genre VARCHAR(50) NOT NULL,
  subgenre_one VARCHAR(50),
  subgenre_two VARCHAR(50),
  runtime INT, 
  release_date DATE,
  director VARCHAR(50),
  movie_poster TEXT,
  plot_summary TEXT
);

CREATE TABLE user_ratings (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  movie_id INT REFERENCES movies(id) ON DELETE CASCADE,
  rating BOOLEAN
);

CREATE TABLE recommended_page (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  genre VARCHAR(50) NOT NULL,
  subgenre_one VARCHAR(50),
  subgenre_two VARCHAR(50),
  runtime INT, 
  release_date DATE,
  director VARCHAR(50),
  movie_poster TEXT,
  plot_summary TEXT
)
