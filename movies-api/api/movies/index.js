import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import { getMovie } from '../tmdb-api';
import { getGenres } from '../tmdb-api';
import { getMovieImages } from '../tmdb-api';
import { getMovieReviews } from '../tmdb-api';
import { getUpcomingMovies } from '../tmdb-api';
import { getNowPlayingMovies } from '../tmdb-api';
import { getPopularMovies } from '../tmdb-api';
import { getTopRatedMovies } from '../tmdb-api';
import { getTrendingMovies } from '../tmdb-api';
import { getMovieCredits } from '../tmdb-api';
import { getSimilarMovies } from '../tmdb-api';
import { getRecommendedMovies } from '../tmdb-api';



const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/genres', asyncHandler(async (req, res) => {
  const data = await getGenres();
  res.status(200).json(data);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const data = await getMovie(req.params.id);
  res.status(200).json(data);
}));

router.get('/:id/images', asyncHandler(async (req, res) => {
  const data = await getMovieImages(req.params.id);
  res.status(200).json(data);
}));

router.get('/:id/reviews', asyncHandler(async (req, res) => {
  const data = await getMovieReviews(req.params.id);
  res.status(200).json(data);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
  const data = await getUpcomingMovies();
  res.status(200).json(data);
}));

router.get('/trending', asyncHandler(async (req, res) => {
  const data = await getTrendingMovies();
  res.status(200).json(data);
}));

router.get('/popular', asyncHandler(async (req, res) => {
  const data = await getPopularMovies();
  res.status(200).json(data);
}));

router.get('/top_rated', asyncHandler(async (req, res) => {
  const data = await getTopRatedMovies();
  res.status(200).json(data);
}));

router.get('/now_playing', asyncHandler(async (req, res) => {
  const data = await getNowPlayingMovies();
  res.status(200).json(data);
}));

router.get('/:id/recommendations', asyncHandler(async (req, res) => {
  const data = await getRecommendedMovies(req.params.id);
  res.status(200).json(data);
}));

router.get('/:id/similar', asyncHandler(async (req, res) => {
  const data = await getSimilarMovies(req.params.id);
  res.status(200).json(data);
}));

router.get('/:id/credits', asyncHandler(async (req, res) => {
  const data = await getMovieCredits(req.params.id);
  res.status(200).json(data);
}));



export default router;
