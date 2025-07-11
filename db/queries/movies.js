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


