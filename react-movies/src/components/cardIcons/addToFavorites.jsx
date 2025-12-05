import React, { useContext, useState } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Snackbar from "@mui/material/Snackbar";
import { add } from "lodash";

const AddToFavoritesIcon = ({ movie }) => {
  const { addToFavourites } = useContext(MoviesContext);

  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToFavourites(movie.id);

    setSnackMessage("Added to Favourites");
    setOpenSnack(true);
    addToFavourites(movie.id);
  };

  const handleClose = () => {
    setOpenSnack(false);
  };

  return (
    <div>
      <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
        <FavoriteIcon color="primary" fontSize="large" />
      </IconButton>

      <Snackbar
        open={openSnack}
        autoHideDuration={2000}
        onClose={handleClose}
        message={snackMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </div>
  );
};

export default AddToFavoritesIcon;
