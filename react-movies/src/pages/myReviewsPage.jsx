import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMyReviews, removeReview } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

const MyReviewsPage = () => {
  const [snack, setSnack] = React.useState("");
  
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["myReviews"],
    queryFn: getMyReviews
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      <PageTemplate
        title="My Reviews"
        movies={data}
        action={(review) => (
          <Button
            color="error"
            variant="outlined"
            onClick={async () => {
              await removeReview(review._id);
              setSnack("Review deleted");
            }}
          >
            Delete
          </Button>
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
