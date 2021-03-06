import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./MovieItem.css";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function MovieItem({ movie }) {
  const history = useHistory();
  const dispatch = useDispatch();

//    Hover state is for mouse over and showing the title
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
//   console.log(movie);


  const detailHandler = (movie) => {
    //Sending Movie detail to reducer
    dispatch({ type: "SET_DETAIL_MOVIE", payload: movie });
    //pushing into details
    history.push(`/details/${movie.id}`);
  };

  const styles = theme => ({
    CardMedia: {
      height: auto,
      width: '100%',
      objectFit: 'cover'
    }
  });


  return (
    <>
      <Card
        className="container wrapper classes.card"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        key={movie.id}
        onClick={() => detailHandler(movie)}
        sx={{height:290, width: 200}}
      >

        <CardMedia objectFit='fill' component="img" src={movie.poster} alt={movie.title} />

        {hover ? (
          <h2 className="centered">{movie.title}</h2>
        ) : (
          <span className="centered"></span>
        )}
        
      </Card>
    </>
  );
}

export default MovieItem;
