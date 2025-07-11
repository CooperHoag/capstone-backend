import db from "#db/client";

/** @return all movies */
export async function getAllMovies() {
  const sql = `SELECT * FROM movies`;
  const { rows: moviesList } = await db.query(sql);
  return moviesList;
}

/** @returns the movie with the given id, or undefined if not found */
export async function getMovieById(id) {
  const sql = `SELECT * FROM movies WHERE id = $1`;
  const { rows: [singleMovieById] } = await db.query(sql, [id]);
  return singleMovieById || undefined;
}

export async function createMovie (title, genres, runtime, releaseDate, director, moviePoster, plotSummary) {
  const sql = `
    INSERT INTO movies (title, genres, runtime, release_date, director, movie_poster, plot_summary)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
  `;
 
 
  const { rows: [newMovie] } = await db.query(sql, [title, genres, runtime, releaseDate, director, moviePoster, plotSummary]);
  console.log(newMovie);
  return newMovie;
};
