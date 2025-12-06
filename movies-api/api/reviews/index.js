import express from "express";
import asyncHandler from "express-async-handler";
import Review from "./reviewModel.js";
import authenticate from "../authenticate/index.js";

const router = express.Router();

//Add a new review
router.post(
  "/",
  authenticate,
  asyncHandler(async (req, res) => {
    const { movieId, review, rating } = req.body;

    const newReview = await Review.create({
      userId: req.user._id,
      movieId,
      author: req.user.username,
      review,
      rating
    });

    res.status(201).json(newReview);
  })
);

//Reviews for a movie
router.get(
  "/movie/:movieId",
  asyncHandler(async (req, res) => {
    const movieId = Number(req.params.movieId);
    const reviews = await Review.find({ movieId });
    res.status(200).json(reviews);
  })
);

//All reviews by logged-in user
router.get(
  "/mine",
  authenticate,
  asyncHandler(async (req, res) => {
    const reviews = await Review.find({ userId: req.user._id });
    res.status(200).json(reviews);
  })
);

//Remove a review (only by owner)
router.delete(
  "/:id",
  authenticate,
  asyncHandler(async (req, res) => {
    const reviewId = req.params.id;

    // Find review
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Prevent deleting someone else's review
    if (review.userId !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await Review.findByIdAndDelete(reviewId);

    res.status(200).json({ message: "Review deleted" });
  })
);


export default router;
