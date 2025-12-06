import React from "react";
import Typography from "@mui/material/Typography";

const MovieReview = ({ review }) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Review By: {review.author || "Anonymous"}
      </Typography>

      <Typography variant="h6" component="p">
        {review.review || review.content}
      </Typography>
    </>
  );
};

export default MovieReview;

