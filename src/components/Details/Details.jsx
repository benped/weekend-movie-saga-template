import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


function Details() {
    const movie = useSelector(store => store.detailMovie);
    console.log(movie);



    return (
        <>
<h1> Hello World</h1>
        </>
    )
}

export default Details; 