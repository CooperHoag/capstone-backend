import db from "#db/clients.js";

// Creates a new movie rating from a user
export async function createRating(userId, movieId, rating) {
  const sql = `
    INSERT INTO user_ratings (user_id, movie_id, ratings)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  const { rows: [newRating]} = await db.query(sql, [userId, movieId, rating]);
  return newRating;
}

// Gets all movies this user has rated which will also show their rating
export async function getRatingsByUserId(userId) {
  const sql = `
    SELECT movies.*, user_ratings.rating
    FROM user_ratings
    JOIN movies ON user_ratings.movie_id = movies.id
    WHERE user_ratings.user_id = $1
  `;
  const { rows: ratedMovies } = await db.query(sql, [userId]);
  return ratedMovies;
}