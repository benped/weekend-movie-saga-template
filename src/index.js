import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider, useDispatch } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_GENRES", fetchGenre);
  yield takeEvery("ADD_NEW_MOVIE", addMovie);
  yield takeEvery("FETCH_MOVIE", fetchDetailMovie);
}

function* addMovie(action) {
  console.log("add movie is", action.payload);
  //    const  dispatch = useDispatch();

  const { title, description, url, genre_id } = action.payload;
  try {
    console.log("inside try add Movie");

    yield axios.post(`/api/movie`, {
      title: title,
      description: description,
      poster: url,
      genre_id: genre_id,
    });
    //  Does not like having a hook here
    // dispatch({type: "FETCH_MOVIES"})
  } catch {
    console.log("Error on post");
  }
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}

function* fetchDetailMovie(action) {
  // get movie from the DB
  console.log("action.payload is", action.payload);

  try {
    console.log('Inside try fetch Movie Detail');
    
    const movies = yield axios.get(`/api/movie/${action.payload}`);
    console.log("get one:", movies.data);
    yield put({ type: "SET_DETAIL_MOVIE", payload: movies.data[0] });
  } catch {
    console.log("get detail movie error");
  }
}

function* fetchGenre(action) {
  const detailMovie = action.payload;
  console.log("inside fetchGenre", action);
  const id = detailMovie;

  try {
    const movie_genres = yield axios.get(`/api/genre/${id}`);
    console.log("get all genres:", movie_genres.data);
    yield put({ type: "SET_DETAIL_GENRE", payload: movie_genres.data });
  } catch {
    console.log("Error on get genres");
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the detail view movie id
const detailMovie = (state = {}, action) => {
  switch (action.type) {
    case "SET_DETAIL_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the detail view movie id
const detailGenre = (state = [], action) => {
  switch (action.type) {
    case "SET_DETAIL_GENRE":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    detailMovie,
    detailGenre,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const styles = theme => ({
    Card: {
      width: 300,
      margin: 'auto'
    },
    Media: {
      height: 550,
      width: '100%',
      objectFit: 'cover'
    }
  });

  
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>

      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
