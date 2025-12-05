import { add } from "lodash";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { getUserFavourites } from "../api/tmdb-api";
import { addFavourite } from "../api/tmdb-api";
import { removeFavourite } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const queryClient = useQueryClient();


const { data: favorites = [],  } = useQuery({
      queryKey: ["favourites"],
      queryFn: getUserFavourites,
      enabled: !!localStorage.getItem("token"),
    });

const addMutation = useMutation({
  mutationFn: (movieId) => addFavourite(movieId),
  onSuccess: () => { queryClient.invalidateQueries("favourites"); },
});

const removeMutation = useMutation({
  mutationFn: (movieId) => removeFavourite(movieId),
  onSuccess: () => { queryClient.invalidateQueries("favourites"); },
});

const addToFavourites = (movieId) => {
    addMutation.mutate(movieId);
  };

const removeFromFavourites = (movieId) => {
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
        addToFavourites,
        removeFromFavourites,
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
