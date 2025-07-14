import express from "express";
const router = express.Router();
export default router;

import requireUser from "#middleware/requireUser";
import {
  createRecommendedPageOne,
  createRecommendedPageTwo,
} from "#db/queries/recommended";

// Apply requireUser middleware if you want authentication
router.get("/Recommended", requireUser, async (req, res) => {
  try {
    const userId = req.user.id; // Make sure req.user exists from requireUser middleware

    await createRecommendedPageOne(userId);
    await createRecommendedPageTwo(userId);

    res.status(200).json({ message: "Recommendations generated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve recommendations" });
  }
});
