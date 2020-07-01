import React, { Component } from "react";
import { Link } from "react-router-dom";

import movieAPI from "../services/movieAPI";
import route from "../routes";

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    movieAPI.fetchMovieWeek().then((movies) => this.setState({ movies }));
  }

  componentDidUpdate(prevProps) {}

  fetchMovieQuery(query) {
    movieAPI
      .fetchMovieSearch(query)
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        {
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${route.movies}/${movie.id}`,
                  }}
                >
                  {movie.title}
                  {movie.name}
                </Link>
              </li>
            ))}
          </ul>
        }
      </>
    );
  }
}
