const getRecommendations = (allMovies, likedMovies) => {
  const likeCategories = [
    ...new Set(likedMovies.map((movie) => movie.category)),
  ];
};
