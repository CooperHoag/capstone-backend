import express from "express";
const router = express.Router();
export default router;

import requireUser from "#middleware/requireUser";
import { addToWatchlist, getUserWatchlist, removeFromWatchlist } from "#db/queries/watchlist";

// add a movie to a user's watchlist
router.post("/", requireUser, async (req, res, next) => {
  try {
    const { movieId } = req.body;
    const entry = await addToWatchlist(req.user.id, movieId);
    res.status(201).json(entry);
  } catch (error) {
    next(error);
  }
});

// get all moies in the user's watchlist
router.get("/", requireUser, async (req, res, next) => {
  try {
    const movies = await getUserWatchlist(req.user.id);
    res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
});

// remove a movie from the watchlist
router.delete("/:movieId", requireUser, async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const removed = await removeFromWatchlist(req.user.id, movieId);
    if (!removed) return res.status(404).send("Movie not found in watchlist");
    res.send({ message: "Removed from watchlist" })
  } catch (error) {
    next(error);
  }
});