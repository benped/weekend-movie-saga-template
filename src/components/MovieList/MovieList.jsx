import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import MovieItem from "../MovieItem/MovieItem";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      {/* <section className="movies"> */}
        {/* <Box sx={{ flexGrow: 5}}> */}
        <Box
          m={2}
          p={3}
          display="flex"
          sx={{ display: "flex", justifyContent: "center" }}
            direction="row"
            alignItems="center"
            justifyContent="center"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            gap={2}
            // columns={{ xs: 2, sm: 8, md: 12 }}
            // sx={{ maxWidth: '30%' }}
          >
            {movies.map((movie, index) => {
              return (
                <Grid
                // item xs={2} sm={4} md={4} key={index}
                >
                  <MovieItem
                    movie={movie}
                    onClick={() => detailHandler(movie)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        {/* </Box> */}
      {/* </section> */}
    </main>
  );
}

export default MovieList;
