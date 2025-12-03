export const getMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/discover`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
      throw error
  });
};


export const getMovie = ({ queryKey }) => {
  const [, { id }] = queryKey;

  return fetch(
    `http://localhost:8080/api/movies/${id}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => { throw error });
};



  export const getGenres = () => {
  return fetch(
    `http://localhost:8080/api/movies/genres`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => { throw error });
};



  export const getMovieImages = ({ queryKey }) => {
  const [, { id }] = queryKey;

  return fetch(
    `http://localhost:8080/api/movies/${id}/images`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => { throw error });
};


  export const getMovieReviews = ({ queryKey }) => {
  const [, { id }] = queryKey;

  return fetch(
    `http://localhost:8080/api/movies/${id}/reviews`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => { throw error });
};


export const getUpcomingMovies = () => {
  return fetch(`http://localhost:8080/api/movies/upcoming`)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => { throw error });
};

export const getTrendingMovies = () => {
  return fetch(`http://localhost:8080/api/movies/trending`)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => { throw error });
};

export const getPopularMovies = () => {
  return fetch(`http://localhost:8080/api/movies/popular`)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => { throw error });
};

export const getTopRatedMovies = () => {
  return fetch(`http://localhost:8080/api/movies/top_rated`)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => { throw error });
};

export const getNowPlayingMovies = () => {
  return fetch(`http://localhost:8080/api/movies/now_playing`)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => { throw error });
};


export const getRecommendedMovies = ({ queryKey }) => {
  const [, { id }] = queryKey;
  return fetch(`http://localhost:8080/api/movies/${id}/recommendations`)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => { throw error });
};

export const getSimilarMovies = ({ queryKey }) => {
  const [, { id }] = queryKey;
  return fetch(`http://localhost:8080/api/movies/${id}/similar`)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => { throw error });
};


export const getMovieCredits = ({ queryKey }) => {
  const [, { id }] = queryKey;

  return fetch(`http://localhost:8080/api/movies/${id}/credits`)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => { throw error });
};


export const getPerson = ({ queryKey }) => {
  const [, { id }] = queryKey;

  return fetch(`http://localhost:8080/api/person/${id}`)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => { throw error });
};

export const getPersonMovieCredits = ({ queryKey }) => {
  const [, { id }] = queryKey;

  return fetch(`http://localhost:8080/api/person/${id}/credits`)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => { throw error });
};

