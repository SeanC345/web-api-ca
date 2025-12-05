import express from "express";
import asyncHandler from "express-async-handler";
import Favorite from "./favoriteModel.js";
import authenticate from "../authenticate/index.js";

const router = express.Router();

// GET all favourites for the logged-in user
router.get(
  "/",
  authenticate,
  asyncHandler(async (req, res) => {
    const favourites = await Favorite.find({ userId: req.user.id });
    res.status(200).json(favourites);
  })
);

// POST add favourite
router.post(
  "/",
  authenticate,
  asyncHandler(async (req, res) => {
    const { movieId } = req.body;
    const userId = req.user.id;

    const exists = await Favorite.findOne({ userId, movieId });

    if (exists) {
      return res.status(400).json({ message: "Already favorited" });
    }

    const newFavorite = await Favorite.create({ userId, movieId });
    res.status(201).json(newFavorite);
  })
);

// DELETE remove favorite
router.delete(
  "/:movieId",
  authenticate,
  asyncHandler(async (req, res) => {
    await Favorite.findOneAndDelete({
      userId: req.user.id,
      movieId: req.params.movieId,
    });
    res.status(200).json({ message: "Favorite removed" });
  })
);

export default router;
