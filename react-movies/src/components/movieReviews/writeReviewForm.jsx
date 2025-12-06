import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const WriteReviewForm = ({ open, onClose, onSubmit }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!review.trim()) return;
    onSubmit(review, rating);
    setReview("");
    setRating(0);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Write a Review</DialogTitle>
      <DialogContent>
        <Rating
          value={rating}
          onChange={(e, value) => setRating(value)}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Your review"
          variant="filled"
          fullWidth
          multiline
          rows={4}
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Submit Review
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WriteReviewForm;
