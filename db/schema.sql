DROP TABLE IF EXISTS user_genre_selections CASCADE;
DROP TABLE IF EXISTS genres CASCADE;
DROP TABLE IF EXISTS user_ratings CASCADE;
DROP TABLE IF EXISTS watchlist CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS movies CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS recommended_page CASCADE;


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
CREATE TABLE recommended_page (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  genres TEXT NOT NULL,
  runtime INT, 
  release_date DATE,
  director VARCHAR(50),
  movie_poster TEXT,
  plot_summary TEXT
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  genres TEXT NOT NULL,
  runtime INT, 
  release_date DATE,
  director VARCHAR(50),
  movie_poster TEXT,
  plot_summary TEXT
);
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  movie_id INT REFERENCES movies(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_ratings (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  movie_id INT REFERENCES movies(id) ON DELETE CASCADE,
  rating BOOLEAN NOT NULL,
  UNIQUE (user_id, movie_id)
);


CREATE TABLE watchlist (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  movie_id INT REFERENCES movies(id) ON DELETE CASCADE,
  UNIQUE (user_id, movie_id)
);

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  genre_label TEXT NOT NULL UNIQUE
);

CREATE TABLE user_genre_selections (
  user_id INT REFERENCES users(id),
  genre_id INT REFERENCES genres(id),
  PRIMARY KEY (user_id, genre_id)
);

INSERT INTO genres (genre_label) VALUES
('Action'), ('Horror'), ('Romance'), ('Sci-Fi'), ('Drama'), ('Comedy');
