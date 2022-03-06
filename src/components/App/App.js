import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import DeleteForm from "../AddForm/AddForm";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import backgroundVideo from "../../video/gradient.mp4";

function App() {
  return (
    <>
      <Router>
      <video component="video" autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
        <div className="App">

          <Route path="/" exact>
            <DeleteForm />
          </Route>

          <Route path="/" exact>
          <h1>The Movies!</h1>
            <MovieList />
          </Route>

          <Route path="/details/:id">
            <Details />
          </Route>
        </div>
      </Router>
    </>
  );
}

export default App;
