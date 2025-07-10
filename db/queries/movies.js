import db from '#db/client';


/** @return the movie created with the provided details */ 
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


/** @return all movies */
export async function getAllMovies () {
  const sql = `SELECT * FROM movies`;

  const { rows: moviesList } = await db.query(sql);
  console.log(moviesList);
  return moviesList;
};


/** @returns the movie with the given id */
/** @returns UNDEFINED if a movie with the given ID does not exist */
export async function getMovieById (id) {
  const sql = `SELECT * FROM movies WHERE id=$1`;

  const { rows: [singleMovieById] } = await db.query(sql, [id]);
  console.log(singleMovieById);
  return singleMovieById || undefined;
};


/** @returns the updated movie with the given ID */
/** @return UNDEFINED if movie with the given ID does not exist */
export async function updateMovieById (id, title, genres, runtime, releaseDate, director, moviePoster, plotSummary) {
const sql = `UPDATE movies SET title=$2, genres=#3, runtime=$4, release_date=$5, director=$6, movie_poster=$7, plot_summary=$8
WHERE id=$1
RETURNING *`;

const { rows: [updatedMovie] } = await db.query(sql, [id, title, genres, runtime, releaseDate, director, moviePoster, plotSummary]);
console.log(updatedMovie);
return updatedMovie || undefined;
};


/** @returns the deleted movie with the given ID */
/** @returns UNDEFINED if the movie with the given ID does not exist */
export async function deleteMovieById (id) {
const sql =`DELETE FROM movies WHERE id=$1
RETURNING *`

const { rows: [deletedMovie] } = await db.query(sql, [id]);
console.log(deletedMovie);
return deletedMovie;
};





