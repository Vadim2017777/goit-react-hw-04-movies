import React, { Component } from "react";
import { Link } from "react-router-dom";

import Searchbox from "../components/Searchbox/Searchbox";
import Loader from "../components/Loader/Loader";
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
    loading: false,
    error: null,
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
          <ul style={styles}>
            {movies.map((movie) => (
              <ul key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}
                  ></img>
                  {movie.title}
                  {movie.name}
                </Link>
              </ul>
            ))}
          </ul>
        )}
        {loading && <Loader />}
        {/* <Route path={`${match.path}/:showId`} component={InlineShowDetails} /> */}
      </>
    );
  }
}
