import React, { Component } from "react";
import { Link } from "react-router-dom";

import { INITIAL_STATE_MOVIE } from "../helpers/constants";

import Searchbox from "../components/Searchbox/Searchbox";
import Loader from "../components/Loader/Loader";

import movieAPI from "../services/movieAPI";
import queryParams from "../utils/getQueryParams";

import styles from "./Views.module.css";

export default class Movie extends Component {
  state = {
    ...INITIAL_STATE_MOVIE,
  };

  componentDidMount() {
    const { query } = queryParams(this.props.location.search);

    if (query) {
      this.fetchMovieQuery(query);
    }
  }

  componentDidUpdate(prevProps) {
    const { query: prevQuery } = queryParams(prevProps.location.search);
    const { query: nextQuery } = queryParams(this.props.location.search);

    if (prevQuery !== nextQuery && nextQuery !== undefined) {
      this.fetchMovieQuery(nextQuery);
    }
  }

  fetchMovieQuery(query) {
    this.setState({ loading: true });
    movieAPI
      .fetchMovieSearch(query)
      .then((movies) => this.setState({ movies }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading, error } = this.state;
    const { match } = this.props;
    const showList = movies.length;

    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {error && <p>Somthing went wrong:{error.message}</p>}
        {showList > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id} className={styles.movie_list}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.backdrop_path !== null ? (
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      alt={movie.title}
                    ></img>
                  ) : (
                    <img
                      src={
                        "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder"
                      }
                      alt={movie.title}
                    ></img>
                  )}

                  {movie.title}
                  {movie.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {loading && <Loader />}
      </>
    );
  }
}
