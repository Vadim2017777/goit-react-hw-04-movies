import React, { Component } from "react";

import { INITIAL_STATE_REVIEW } from "../components/helpers/constants";
import movieAPI from "../services/movieAPI";

import styles from "./Views.module.css";

export default class InlineMovieReview extends Component {
  state = {
    ...INITIAL_STATE_REVIEW,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    movieAPI
      .fetchMovieReview(movieId)
      .then((data) => this.setState({ data }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { data, error } = this.state;

    return (
      <>
        {error && <p>Somthing went wrong:{error.message}</p>}

        {
          <ul>
            {data.map((review) => (
              <li className={styles.cast_menu} key={review.id}>
                <div className={styles.cast_text}>Author: {review.author}</div>
                <div>{review.content}</div>
              </li>
            ))}
          </ul>
        }
      </>
    );
  }
}
