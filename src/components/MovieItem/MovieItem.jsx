import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './MovieItem.css';


function MovieItem({ movie }) {
  const history = useHistory();
  const dispatch = useDispatch();

    const [hover, setHover] = useState(false);
    const onHover = () => {
      setHover(true);
    };

    const onLeave = () => {
      setHover(false);
    };
  console.log(movie);

  const detailHandler = (movie) => {
    //Sending Movie detail to reducer
    dispatch({ type: "SET_DETAIL_MOVIE", payload: movie });
    //pushing into details
    history.push(`/details/${movie.id}`);
  };




  return (
    < >
      <div
        className="container wrapper"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        key={movie.id}
        onClick={() => detailHandler(movie)}
      >
          <div>
        <img  src={movie.poster} alt={movie.title} />

          </div>
          { hover ? <h3 className="centered">{movie.title}</h3> : <span className="centered"></span>}
          {/* <h3 className="centered">{movie.title}</h3> */}
      </div>
    </>
  );
}

export default MovieItem;
