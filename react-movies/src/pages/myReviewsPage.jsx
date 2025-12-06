import React from "react";
import { useQuery, useQueries, useQueryClient } from "@tanstack/react-query";
import { getMyReviews, removeReview, getMovie } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const MyReviewsPage = () => {
  const [snack, setSnack] = React.useState("");
  const queryClient = useQueryClient();

 
  const { data: reviews, isPending, isError, error } = useQuery({
    queryKey: ["myReviews"],
    queryFn: getMyReviews
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movieQueries = useQueries({
    queries: reviews.map((r) => ({
      queryKey: ["movie", { id: r.movieId }],
      queryFn: getMovie
    }))
  });

  const loadingMovie = movieQueries.some((mq) => mq.isPending);
  if (loadingMovie) return <Spinner />;

  const movies = movieQueries.map((mq, index) => {
    const movie = mq.data;
    return {
      ...movie,
      _review: reviews[index] 
    };
  });

  return (
    <>
      <PageTemplate
        title="My Reviews"
        movies={movies}
        action={(movie) => (
          <IconButton
            color="error"
            onClick={async () => {
              await removeReview(movie._review._id);
              setSnack("Review deleted");
              queryClient.invalidateQueries(["myReviews"]);
            }}
          >
            <DeleteIcon />
          </IconButton>
        )}
      />

      <Snackbar
        open={!!snack}
        autoHideDuration={2000}
        onClose={() => setSnack("")}
        message={snack}
      />
    </>
  );
};

export default MyReviewsPage;
