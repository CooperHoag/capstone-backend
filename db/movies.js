import db from '#db/client';


/** @return the movie created with the provided details */ 
export async function createMovie (title, genre, runtime, releaseYear, director, moviePoster, plotSummary) {
  const sql = `
    INSERT INTO movies (title, genre, runtime, release_year, director, movie_poster, plot_summary)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
  `;

  const { rows: [newMovie] } = await db.query(sql, [title, genre, runtime, releaseYear, director, moviePoster, plotSummary]);
  console.log(newMovie);
  return newMovie;
};


/** @return all movies */
export async function getAllMovies () {
  const sql = `SELECT * FROM movies
  RETURNING *`;

  const { rows: moviesList } = await db.query(sql);
  console.log(moviesList);
  return moviesList;
};


/** @returns the movie with the given id */
/** @returns UNDEFINED if a movie with the given ID does not exist */
export async function getMovieById (id) {
  const sql = `SELECT * FROM movies WHERE id=$1
  RETURNING *`;

  const { rows: [singleMovieById] } = await db.query(sql, [id]);
  console.log(singleMovieById[0]);
  return singleMovieById[0] || undefined;
};


/** @returns the updated movie with the given ID */
/** @return UNDEFINED if movie with the given ID does not exist */
export async function updateMovieById (title, genre, runtime, releaseYear, director, moviePoster, plotSummary) {
const sql = `UPDATE movies SET title=$2, genre=$3, runtime=$4, release_year=$5, director=$6, movie_poster=$7, plot_summary=$8
WHERE id=$1
RETURNING *`;

const { rows: [updatedMovie] } = db.query(sql, [title, genre, runtime, releaseYear, director, moviePoster, plotSummary]);
console.log(updatedMovie[0]);
return updatedMovie[0] || undefined;
};


/** @returns the deleted movie with the given ID */
/** @returns UNDEFINED if the movie with the given ID does not exist */
export async function deleteMovieById (id) {
const sql =`DELETE FROM movies WHERE id=$1
RETURNING *`

const { rows: [deletedMovie] } = db.query(sql, [id]);
console.log(deletedMovie[0]);
return deletedMovie[0];
};





