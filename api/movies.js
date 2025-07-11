import express from "express";
const router = express.Router();
import { getAllMovies, getMovieById } from "#db/queries/movies";

export default router;

router.get("/", async (req, res) => {
  try {
    const movies = await getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve movies" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await getMovieById(id);

  if (!movie) return res.status(404).send("Movie not found");

  res.status(200).json(movie);
});
