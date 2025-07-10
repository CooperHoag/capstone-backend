export async function createRecommendedPage() {
  sql = `
INSERT INTO recommended_page (title, genres, runtime, release_date, director, movie_poster, plot_summary)
SELECT DISTINCT m.title, m.genres, m.runtime, m.release_date, m.director, m.movie_poster, m.plot_summary
FROM movies m
WHERE m.id NOT IN (
  SELECT movie_id FROM user_ratings WHERE user_id = $1
)
  `;
}
