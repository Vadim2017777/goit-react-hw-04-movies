import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movieAPI from '../services/movieAPI';

const styles = {
  display: 'grid',
  gridTemplateColumns: ' 1fr 1fr 1fr',
  //   'grid-template-rows': ' auto ',
  maxWidth: 600,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: 12,
  paddingLeft: 12,
  listStyle: 'none',
  columnGap: '50px',
};

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    movieAPI.fetchMovieWeek().then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    const showList = movies.length;

    const src = 'https://image.tmdb.org/t/p/original/';
    return (
      <>
        {showList > 0 && (
          <ul style={styles}>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`${match.url}/${movie.id}`}>
                  <img
                    src={`${src}/${movie.backdrop_path}`}
                    alt={movie.title}
                  ></img>
                  {movie.title}
                  {movie.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {/* <Route path={`${match.path}/:showId`} component={InlineShowDetails} /> */}
      </>
    );
  }
}
