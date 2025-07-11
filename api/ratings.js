import express from "express";
const router = express.Router();
export default router;

import requireUser from "#middleware/requireUser";
import {
  createRating,
  getRatingsByUserId,
  deleteRatingByIdForUser,
} from "#db/queries/ratings";

// POST /ratings - Create new thumbs up/down for a movie
router.post("/", requireUser, async (req, res, next) => {
  try {
    const { movieId, rating } = req.body;
    const newRating = await createRating(req.user.id, movieId, rating);
    res.status(201).send(newRating);
  } catch (err) {
    next(err);
  }
});

// GET /ratings/me - Get logged-in user's rated movies
router.get("/me", requireUser, async (req, res, next) => {
  try {
    const ratings = await getRatingsByUserId(req.user.id);
    res.send(ratings);
  } catch (err) {
    next(err);
  }
});

// DELETE /ratings/:id - Only allow user to delete their own rating
router.delete("/:id", requireUser, async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await deleteRatingByIdForUser(req.user.id, id);

    if (!deleted) {
      return res.status(404).json({ error: "Rating not found or not yours to delete" });
    }

    res.status(200).json({ message: "Rating deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete rating" });
  }
});

