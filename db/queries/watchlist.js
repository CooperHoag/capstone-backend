import db from "#db/client";

export async function addToWatchlist(userId, movieId) {
  const sql = `
    INSERT INTO watchlist (user_id, movie_id)
    VALUES ($1, $2)
    ON CONFLICT DO NOTHING
    RETURNING *
  `;
  const { rows: [watchlistEntry] } = await db.query(sql, [userId, movieId]);
  return watchlistEntry;
}

export async function getUserWatchlist(userId) {
  const sql = `
    SELECT movies.*
    FROM watchlist
    JOIN movies ON watchlist.movie_id = movies.id
    WHERE watchlist.user_id = $1
  `;
  const { rows } = await db.query(sql, [userId]);
  return rows;
}

export async function removeFromWatchlist(userId, movieId) {
  const sql = `
    DELETE FROM watchlist
    WHERE user_id = $1 AND movie_id = $2
    RETURNING *;
  `;
  const { rows: [deleted] } = await db.query(sql, [userId, movieId]);
  return deleted;
}