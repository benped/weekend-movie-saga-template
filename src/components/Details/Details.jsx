import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function Details() {
  const movie = useSelector((store) => store.detailMovie);
  const genres = useSelector((store) => store.detailGenre);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: "FETCH_GENRES", payload: id });
    dispatch({ type: "FETCH_MOVIE", payload: id });
  }, []);

  const history = useHistory();

  const backButton = () => {
    console.log("Inside back button");
    history.push("/");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-wrap",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-wrap",
            justifyContent: "center",
            padding: "50",
          }}
          margin={10}
        >
          {/* <Paper elevation={3} /> */}
          <Box margin={3}>
            <img src={movie.poster} />
            <h3>Genres:</h3>
            {genres.length > 0 ? (
              genres.map((genre, i) => <p key={i}>{genre.name}</p>)
            ) : (
              <span></span>
            )}
          </Box>
          <Box
            margin={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              maxWidth: 600,
            }}
          >
            <h1> {movie.title}</h1>
            <p>{movie.description}</p>
          </Box>
          {/* MAP OF GENRES */}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-wrap",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" onClick={backButton}>
          Back to Movies
        </Button>
      </Box>
    </>
  );
}

export default Details;
