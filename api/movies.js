import express from "express";
const router = express.Router();
import requireUser from "#middleware/requireUser";
import requireBody from "#middleware/requireBody";
export default router;
import {
  getAllMovies,
  deleteMovieById,
  getMovieById,
  updateMovieById,
} from "#db/queries/movies";

router.route("/movies").get(async (req, res) => {
  try {
    const movies = await getAllMovies(); // Call the function correctly
    res.status(200).json(movies); // Send back the movie list
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve movies" });
  }
});

router.route("/movies/:id");
router.get("/", requireBody(["id"]), async (req, res) => {
  const { id } = req.body;
  const movie = await getMovieById(id);
  if (!id) return res.status(401).send("Invalid movie");

  const token = await createToken({ id: movie.id });
  res.send(token);
});

router.route("/movies");
router.post(
  "/",
  requireBody([
    "title, genre, runtime, releaseDate, director, moviePoster, plotSummary",
  ]),
  async (req, res) => {
    const {
      title,
      genre,
      runtime,
      releaseDate,
      director,
      moviePoster,
      plotSummary,
    } = req.body;
    const movie = await updateMovieById(
      title,
      genre,
      runtime,
      releaseDate,
      director,
      moviePoster,
      plotSummary
    );
    if (!id) return res.status(401).send("cannot update movie");

    const token = await createToken({
      id: movie.id,
      title: movie.title,
      genre: movie.genre,
      runtime: movie.runtime,
      releaseDate: movie.releaseDate,
      director: movie.director,
      moviePoster: movie.moviePoster,
      plotSummary: movie.plotSummary,
    });
    res.send(token);
  }
);

router.delete("/movies/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await deleteMovieById(id);

    if (!deleted) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete movie" });
  }
});
