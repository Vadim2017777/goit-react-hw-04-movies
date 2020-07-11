import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import { INITIAL_STATE_MOVIEDETAILS } from "../helpers/constants";

import InlineMovieCast from "../views/InlineMovieCast";
import InlineMovieReview from "../views/InlineMovieReview";


import movieAPI from "../services/movieAPI";

import styles from "./Views.module.css";

export default class ShowDetails extends Component {
  state = { ...INITIAL_STATE_MOVIEDETAILS };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    movieAPI
      .fetchMovieDetails(movieId)
      .then((movie) => this.setState({ movie }))
      .catch((error) => this.setState({ error }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    const { history } = this.props;
    if (state && state.from) {
      return history.push(state.from);
    }
    history.push("/");
  };

  render() {
    const { movie, error } = this.state;
    const { match } = this.props;

    const { genres } = this.state.movie;

    return (
      <>
        {error && <p>Somthing went wrong:{error.message}</p>}
        <div>
          <button
            type="button"
            className={styles.button_movieDetails}
            onClick={this.handleGoBack}
          >
            Go back
          </button>
          {movie && (
            <>
              <div className={styles.cardMovie}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                  className={styles.img_movieDetails}
                />
                <div className={styles.card_movieDetails}>
                  <h1>{movie.title}</h1>
                  <div className={styles.card_text}>
                    User score: {movie.vote_average}
                  </div>
                  <p className={styles.card_overview}>{movie.overview}</p>
                  <div className={styles.card_text}>Genres</div>
                  {genres && (
                    <ul className={styles.card_submenu}>
                      {genres.map((genre) => (
                        <li key={genre.id} className={styles.card_subtext}>
                          {genre.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </>
          )}
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${match.url}/cast`,
                  state: { from: this.props.location },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${match.url}/review`,
                  state: { from: this.props.location },
                }}
              >
                Review
              </Link>
            </li>
          </ul>
        </div>
        <Route path={`${match.path}/cast`} component={InlineMovieCast} />
        <Route path={`${match.path}/review`} component={InlineMovieReview} />
      </>
    );
  }
}
