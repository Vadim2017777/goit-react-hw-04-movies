import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import Searchbox from "../components/Searchbox/Searchbox";
import MovieDetails from "../views/MovieDetails";

import queryParams from "../utils/getQueryParams";
import movieAPI from "../services/movieAPI";

const styles = {
  display: "grid",
  gridTemplateColumns: " 1fr 1fr 1fr",
  //   'grid-template-rows': ' auto ',
  maxWidth: 600,
  marginLeft: "auto",
  marginRight: "auto",
  paddingRight: 12,
  paddingLeft: 12,
  listStyle: "none",
  columnGap: "50px",
};

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = queryParams(this.props.location.search);
    // movieAPI.fetchMovieWeek().then((movies) => this.setState({ movies }));
    if (query) {
      this.fetchMovieQuery(query);
    }
  }

  componentDidUpdate(prevProps) {
    const { query: prevQuery } = queryParams(prevProps.location.search);
    const { query: nextQuery } = queryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovieQuery(nextQuery);
    }
  }

  fetchMovieQuery(query) {
    movieAPI
      .fetchMovieSearch(query)
      .then((movies) => this.setState({ movies }));
  }

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    const showList = movies.length;

    const src = "https://image.tmdb.org/t/p/original/";

    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {showList > 0 && (
          <ul style={styles}>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
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
