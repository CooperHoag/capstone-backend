import db from "#db/client";

// Creates a new movie rating from a user
export async function createRating(userId, movieId, rating) {
  const sql = `
    INSERT INTO user_ratings (user_id, movie_id, rating)
    VALUES ($1, $2, $3)
    ON CONFLICT (user_id, movie_id)
    DO UPDATE SET rating = EXCLUDED.rating
    RETURNING *;
  `;
  const { rows: [newRating] } = await db.query(sql, [userId, movieId, rating]);
  return newRating;
}

// Gets all movies this user has rated, including their rating
export async function getRatingsByUserId(userId) {
  const sql = `
    SELECT movies.*, user_ratings.rating, user_ratings.id AS rating_id
    FROM user_ratings
    JOIN movies ON user_ratings.movie_id = movies.id
    WHERE user_ratings.user_id = $1
  `;
  const { rows: ratedMovies } = await db.query(sql, [userId]);
  return ratedMovies;
}

// Deletes a rating only if it belongs to the user
export async function deleteRatingByIdForUser(userId, ratingId) {
  const sql = `
    DELETE FROM user_ratings
    WHERE id = $1 AND user_id = $2
    RETURNING *
  `;
  const { rows: [deletedRating] } = await db.query(sql, [ratingId, userId]);
  return deletedRating;
}
