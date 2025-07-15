import express from "express";
const router = express.Router();
export default router;

import requireUser from "#middleware/requireUser";
import { createReview, getReviewsByMovie, deleteReviewByIdForUser } from "#db/queries/reviews";

// POST /reviews
router.post("/", requireUser, async (req, res, next) => {
  try {
    const { movieId, content } = req.body;
    const review = await createReview(req.user.id, movieId, content);
    res.status(201).json(review);
  } catch (err) {
    next(err);
  }
});

// GET /reviews/:movieId
router.get("/:movieId", async (req, res, next) => {
  try {
    const reviews = await getReviewsByMovie(req.params.movieId);
    res.json(reviews);
  } catch (err) {
    next(err);
  }
});

// DELETE /reviews/:id
router.delete("/:id", requireUser, async (req, res, next) => {
  try {
    const deleted = await deleteReviewByIdForUser(req.user.id, req.params.id);
    if (!deleted) return res.status(404).send("Not your review to delete.");
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
});
