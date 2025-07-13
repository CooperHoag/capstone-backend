export async function createRecommendedPageOne() {
  sql = `
INSERT INTO recommended_page (title, genres, runtime, release_date, director, movie_poster, plot_summary)
SELECT DISTINCT m.title, m.genres, m.runtime, m.release_date, m.director, m.movie_poster, m.plot_summary
FROM movies m
WHERE m.id NOT IN (
  SELECT movie_id FROM user_ratings WHERE user_id = $1
)
  `;
}
export async function createRecommendedPageTwo(userId) {
  const sql = `
WITH user_favorites AS (
  SELECT m.*
  FROM user_ratings ur
  JOIN movies m ON ur.movie_id = m.id
  WHERE ur.user_id = $1 AND ur.rating >= 4
),
preferred_genres AS (
  SELECT UNNEST(string_to_array(LOWER(genres), ',')) AS genre
  FROM user_favorites
),
preferred_directors AS (
  SELECT LOWER(director) AS director
  FROM user_favorites
),
matched_movies AS (
  SELECT DISTINCT m.*
  FROM movies m
  LEFT JOIN LATERAL UNNEST(string_to_array(LOWER(m.genres), ',')) AS g(genre) ON true
  WHERE (
    LOWER(m.director) IN (SELECT director FROM preferred_directors)
    OR g.genre IN (SELECT genre FROM preferred_genres)
  )
  AND m.id NOT IN (
    SELECT movie_id FROM user_ratings WHERE user_id = $1
  )
)
INSERT INTO recommended_page (title, genres, runtime, release_date, director, movie_poster, plot_summary)
SELECT title, genres, runtime, release_date, director, movie_poster, plot_summary
FROM matched_movies
LIMIT 20;
  `;
}
