const getRecommendations = (allMovies, likedMovies) => {
  const likedGenres = new Set(likedMovies.map((m) => m.genre));
  const likedSubgenres = new Set(likedMovies.flatMap((m) => m.subgenres));

  return allMovies.filter((movie) => {
    const isAlreadyLiked = likedMovies.some((m) => m.id === movie.id);
    const genreMatch = likedGenres.has(movie.genre);
    const subgenreMatch = movie.subgenres.some((sub) =>
      likedSubgenres.has(sub)
    );

    return !isAlreadyLiked && (genreMatch || subgenreMatch);
  });
};
