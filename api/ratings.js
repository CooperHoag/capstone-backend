import express from "express";
const router = express.Router();
export default router;

import requireUser from "#middleware/requireUser";
import { createRating, getRatingsByUserId } from "#db/queries/ratings";

// POST /ratings
// creates a new rating for a movie (must be logged in)
router.route("/").post(requireUser, async (req, res, next) => {
  try {
    const { movieId, rating } = req.body;
    const newRating = await createRating(req.user.id, movieId, rating);
    res.status(201).send(newRating);
  } catch (err) {
    next(err);
  }
});

// GET /ratings/me
// Gets all movie ratings for the logged-in user
router.route("/me").get(requireUser, async (req, res, next) => {
  try {
    const ratings = await getRatingsByUserId(req.user.id);
    res.send(ratings);
  } catch (err) {
    next(err);
  }
});

router.delete("/ratings/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await deleteRatingsId(id);

    if (!deleted) {
      return res.status(404).json({ error: "Rating not found" });
    }

    res.status(200).json({ message: "Rating deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete rating" });
  }
});
