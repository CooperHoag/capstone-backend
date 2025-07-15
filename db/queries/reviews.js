import db from "#db/client";

export async function createReview(userId, movieId, content) {
  const sql = `
    INSERT INTO reviews (user_id, movie_id, content)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const { rows: [review] } = await db.query(sql, [userId, movieId, content]);
  return review;
}

export async function getReviewsByMovie(movieId) {
  const sql = `
    SELECT reviews.*, users.username
    FROM reviews
    JOIN users ON reviews.user_id = users.id
    WHERE movie_id = $1
    ORDER BY created_at DESC;
  `;
  const { rows } = await db.query(sql, [movieId]);
  return rows;
}

export async function deleteReviewByIdForUser(userId, reviewId) {
  const sql = `
    DELETE FROM reviews
    WHERE id = $1 AND user_id = $2
    RETURNING *;
  `;
  const { rows: [deleted] } = await db.query(sql, [reviewId, userId]);
  return deleted;
}
