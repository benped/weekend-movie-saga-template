import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


function Details() {
    const movie = useSelector(store => store.detailMovie);
    console.log(movie);

    const history = useHistory();

    const backButton = () => {
        console.log('Inside back button');
        history.push("/");
    }

    return (
        <>
<h1> {movie.title}</h1>
<img src={movie.poster}/>
<p>{movie.description}</p>
<button onClick={backButton}>Back to Movies</button>
        </>
    )
}

export default Details; 