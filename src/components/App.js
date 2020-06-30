import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import Movies from "../views/Movies";
import MovieDetails from "../views/MovieDetails";
import NotFound from "../views/NotFound";

import route from "../routes";
// import Searchbar from './Searchbar/Searchbar';

// import articlesApi from '../services/articlesAPI';
// import { INITIAL_STATE_SEARCHBAR } from './helpers/constants';

import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          {/* <Route path={route.home} exact component={Movies} /> */}
          <Route path={route.movies} exact component={Movies} />
          <Route path={route.movieDetails} component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
