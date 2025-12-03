import fetch from 'node-fetch';

export const getMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

export const getMovie = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}&language=en-US&append_to_response=credits`
    );

    if (!response.ok) {
        throw new Error((await response.json()).status_message || "Something went wrong");
    }

    return await response.json();
};

export const getGenres = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  return await response.json();
};


export const getMovieImages = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
        throw new Error((await response.json()).status_message || "Something went wrong");
    }

    return await response.json();
};

export const getMovieReviews = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
        throw new Error((await response.json()).status_message || "Something went wrong");
    }

    return await response.json();
};

export const getUpcomingMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        throw new Error((await response.json()).status_message || "Something went wrong");
    }

    return await response.json();
};

export const getNowPlayingMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        throw new Error((await response.json()).status_message || "Something went wrong");
    }

    return await response.json();
};

export const getPopularMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        throw new Error((await response.json()).status_message || "Something went wrong");
    }

    return await response.json();
};

export const getTopRatedMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        throw new Error((await response.json()).status_message || "Something went wrong");
    }

    return await response.json();
};

export const getTrendingMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        throw new Error((await response.json()).status_message || "Something went wrong");
    }

    return await response.json();
};

export const getMovieCredits = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
        throw new Error((await response.json()).status_message || "Something went wrong");
    }

    return await response.json();
};

export const getSimilarMovies = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        throw new Error((await response.json()).status_message || "Something went wrong");
    }

    return await response.json();
};

export const getRecommendedMovies = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        throw new Error((await response.json()).status_message || "Something went wrong");
    }

    return await response.json();
};

export const getPerson = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
    );

    if (!response.ok) {
        throw new Error((await response.json()).status_message || "Something went wrong");
    }

    return await response.json();
};

export const getPersonMovieCredits = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.TMDB_KEY}&language=en-US`
    );

    if (!response.ok) {
        throw new Error((await response.json()).status_message || "Something went wrong");
    }

    return await response.json();
};