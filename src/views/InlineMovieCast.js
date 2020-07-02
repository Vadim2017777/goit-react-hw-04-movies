import React, { Component } from "react";

import { INITIAL_STATE_MOVIECAST } from "../components/helpers/constants";
import movieAPI from "../services/movieAPI";

import styles from "./Views.module.css";

export default class InlineMovieCast extends Component {
  state = {
    ...INITIAL_STATE_MOVIECAST,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    movieAPI
      .fetchMovieCast(movieId)
      .then((data) => this.setState({ data }))
      .catch((error) => this.setState({ error }));
    console.log(movieId);
  }

  render() {
    const { data, error } = this.state;

    return (
      <>
        {error && <p>Somthing went wrong:{error.message}</p>}
        <h2>Additional information</h2>
        {
          <ul>
            {data.map((actore) => (
              <li key={actore.cast_id}>
                <img
                  className={styles.cast_img}
                  src={`https://image.tmdb.org/t/p/original/${actore.profile_path}`}
                  alt={actore.name}
                  style={styles}
                ></img>
                <div className={styles.card_text}>{actore.name}</div>
                <div className={styles.card_text}>
                  Character: {actore.character}
                </div>
              </li>
            ))}
          </ul>
        }
      </>
    );
  }
}
