import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromFavoritesIcon = ({ movie, showSnack }) => {
  const {removeFromFavourites} = useContext(MoviesContext);

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    e.stopPropagation();

    removeFromFavourites(movie.id);

    if (showSnack) {
      showSnack("Removed from Favourites");
    }

  };
  return (
      <IconButton
        aria-label="remove from favourites"
        onClick={handleRemoveFromFavorites}
      >
        <DeleteIcon color="primary" fontSize="large" />
      </IconButton>
  );
};

export default RemoveFromFavoritesIcon;
