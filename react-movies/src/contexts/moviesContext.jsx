import { add } from "lodash";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { getUserFavorites } from "../api/tmdb-api";
import { addFavorite } from "../api/tmdb-api";
import { removeFavorite } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const queryClient = useQueryClient();


const { data: favorites = [],  } = useQuery({
      queryKey: ["favorites"],
      queryFn: getUserFavorites,
      enabled: !!localStorage.getItem("token"),
    });

const addMutation = useMutation({
  mutationFn: (movieId) => addFavorite(movieId),
  onSuccess: () => { queryClient.invalidateQueries("favorites"); },
});

const removeMutation = useMutation({
  mutationFn: (movieId) => removeFavorite(movieId),
  onSuccess: () => { queryClient.invalidateQueries("favorites"); },
});

const addToFavorites = (movieId) => {
    addMutation.mutate(movieId);
  };

const removeFromFavorites = (movieId) => {
    removeMutation.mutate(movieId);
  };

const [myReviews, setMyReviews] = useState({});
const addReview = (movie, review) => {
  setMyReviews( {...myReviews, [movie.id]: review } )
};

const [mustWatch, setMustWatch] = useState([]);
const addToMustWatch = (movie) => {
  setMustWatch((prev) =>
    prev.includes(movie.id) ? prev : [...prev, movie.id]
  );
};

const removeFromMustWatch = (movie) => {
  setMustWatch((prev) => prev.filter((mId) => mId !== movie.id));
};

   return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        myReviews,
        addReview,
        mustWatch,
        addToMustWatch,
        removeFromMustWatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );

};

export default MoviesContextProvider;
