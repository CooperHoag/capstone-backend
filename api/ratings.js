import express from "express";
const router = express.Router();
export default router;

import requireUser from "#middleware/requireUser.js";
import { createRating, getRatingsByUserId } from "#db/queries/ratings.js";

// POST /ratings
// creates a new rating for a movie (must be logged in)
router
  .post("/")
  .post(requireUser, async (req, res, next) => {
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
router
  .route("/me")
  .get (requireUser, async (req, res, next) => {
    try {
      const ratings = await getRatingsByUserId(req.user.id);
      res.send(ratings);
    } catch (err) {
      next(err);
    }
  });
