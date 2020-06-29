import React, { Component } from 'react';
import movieAPI from '../services/movieAPI';

export default class ShowDetails extends Component {
  state = { movie: null };

  componentDidMount() {
    movieAPI
      .fetchMovieDetails(this.props.match.params.movieId)
      .then(movie => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;
    const src = 'https://image.tmdb.org/t/p/original/';
    return (
      <div>
        {movie && (
          <>
            <img src={`${src}/${movie.backdrop_path}`} alt={movie.title} />
            <h1>{movie.title}</h1>
            <div>{movie.release_date}</div>
            <div>{movie.popularity}%</div>
            <p>{movie.overview}</p>
          </>
        )}
      </div>
    );
  }
}
