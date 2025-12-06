import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router";
import { getMovieReviews, getMovieReviewsDB } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../spinner";

export default function MovieReviews({ movie }) {

  // TMDB reviews
  const tmdbQuery = useQuery({
    queryKey: ["reviews", { id: movie.id }],
    queryFn: getMovieReviews,
  });

  // Database reviews
  const dbQuery = useQuery({
    queryKey: ["dbReviews", movie.id],
    queryFn: () => getMovieReviewsDB(movie.id),
  });

  if (tmdbQuery.isPending || dbQuery.isPending) return <Spinner />;
  if (tmdbQuery.isError) return <h1>{tmdbQuery.error.message}</h1>;
  if (dbQuery.isError) return <h1>{dbQuery.error.message}</h1>;

  const tmdbReviews = tmdbQuery.data.results;
  const dbReviews = dbQuery.data;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }}>

        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

         
          {tmdbReviews.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.author}</TableCell>
              <TableCell>{excerpt(r.content)}</TableCell>
              <TableCell align="right">
                <Link
                  to={`/reviews/${r.id}`}
                  state={{ review: r, movie }}
                >
                  Full Review
                </Link>
              </TableCell>
            </TableRow>
          ))}

          
          {dbReviews.map((r) => (
            <TableRow key={r._id}>
              <TableCell>{r.author}</TableCell>
              <TableCell>{excerpt(r.review)}</TableCell>

              <TableCell align="right">
                <Link
                  to={`/reviews/${r._id}`}
                  state={{ review: r, movie }}
                >
                  Full Review
                </Link>
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}

