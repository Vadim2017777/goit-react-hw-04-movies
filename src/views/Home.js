import React, { Component } from "react";
import { Link } from "react-router-dom";

import { INITIAL_STATE_HOMEPAGE } from "../helpers/constants";

import movieAPI from "../services/movieAPI";

import styles from "./Views.module.css";

export default class HomePage extends Component {
  state = {
    ...INITIAL_STATE_HOMEPAGE,
  };

  componentDidMount() {
    movieAPI
      .fetchMovieWeek()
      .then((movies) => this.setState({ movies }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { movies, error } = this.state;

    return (
      <>
        {error && <p>Somthing went wrong:{error.message}</p>}
        <h2 className={styles.home_title}>Trending today </h2>
        {
          <ul className={styles.home_menu}>
            {movies.map((movie) => (
              <li key={movie.id} className={styles.list_item_home}>
                <Link
                  to={{
                    pathname: `${"/movies"}/${movie.id}`,
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
