import React, { useReducer, useEffect } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=b5236c5c";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SEARCH_MOVIE_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIE_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIE_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "SEARCH_MOVIE_SUCCESS",
          payload: jsonResponse.Search
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIE_REQUEST"
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=b5236c5c`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIE_SUCCESS",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIE_FAILURE",
            error: jsonResponse.Error
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header text="Hooked" />
            <Search search={search} />
            <p className="App-intro">Sharing a few of our favourite movies</p>
            <div className="movies">
              {loading && !errorMessage ? (
                <span>loading...</span>
              ) : errorMessage ? (
                <div className="errorMessage">{errorMessage}</div>
              ) : (
                movies.map((movie, index) => (
                  <Link to={`/detail/${movie.imdbID}`}>
                    <Movie key={`${index}-${movie.Title}`} movie={movie} />
                  </Link>
                ))
              )}
            </div>
          </Route>

          <Route path="/detail/:id">
            <Header text="Hooked" />
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
