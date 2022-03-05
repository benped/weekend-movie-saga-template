import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import MovieItem from '../MovieItem/MovieItem'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // const detailHandler = (movie) => {
    //     //Sending Movie detail to reducer
    //     dispatch({type: 'SET_DETAIL_MOVIE', payload: movie})
    //     //pushing into details
    //     history.push(`/details/${movie.id}`)
    // }


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                
                {movies.map(movie => {
                    return (
                        <MovieItem movie={movie} onClick={() => detailHandler(movie)}/>
                            
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;