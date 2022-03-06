import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import MovieItem from "../MovieItem/MovieItem";

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

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            gap={2}
            m={2}
          p={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {movies.map((movie, index) => {
              return (
                <Grid key={index} >
                  <MovieItem
                    movie={movie}
                    onClick={() => detailHandler(movie)}
                  />
                </Grid>
              );
            })}
          </Grid>
   
 
    </main>
  );
}

export default MovieList;
