import express from "express";
import asyncHandler from "express-async-handler";

const router = express.Router();

const TMDB_BASE = "https://api.themoviedb.org/3";
const TMDB_KEY = process.env.TMDB_KEY;

// Get person details
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const response = await fetch(
      `${TMDB_BASE}/person/${id}?api_key=${TMDB_KEY}`
    );

    if (!response.ok) {
      return res.status(404).json({ message: "Person not found" });
    }

    const data = await response.json();
    res.status(200).json(data);
  })
);

// Get person movie credits
router.get(
  "/:id/credits",
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const response = await fetch(
      `${TMDB_BASE}/person/${id}/movie_credits?api_key=${TMDB_KEY}`
    );

    if (!response.ok) {
      return res.status(404).json({ message: "Credits not found" });
    }

    const data = await response.json();
    res.status(200).json(data);
  })
);

export default router;
