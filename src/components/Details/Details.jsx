import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Details() {
  const movie = useSelector((store) => store.detailMovie);
  const genres = useSelector((store) => store.detailGenre);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_GENRES", payload: movie });
    console.log(genres);
  }, []);

  const history = useHistory();

  const backButton = () => {
    console.log("Inside back button");
    history.push("/");
  };




  return (
    <>
      <div>
        
        <h1> {movie.title}</h1>
        <img src={movie.poster} />
        <p>{movie.description}</p>
        {/* MAP OF GENRES */}
        {genres.length > 0 ? (
          genres.map((genre, i) => <p key={i}>{genre.name}</p>)
        ) : (
          <span></span>
        )}

        <button onClick={backButton}>Back to Movies</button>
      </div>
    </>
  );
}

export default Details;
