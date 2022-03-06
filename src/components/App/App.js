import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import DeleteForm from '../DeleteForm/DeleteForm'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




function App() {


  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

      <Router>
      <Route path='/' exact>
        <DeleteForm/>
      </Route>

        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details">
          <Details />
        </Route>
      </Router>
    </div>
  );
}

export default App;
