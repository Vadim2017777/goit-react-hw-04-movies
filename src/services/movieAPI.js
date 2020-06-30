import axios from "axios";

import { baseUrl, API_KEY } from "../components/helpers/constants";

const fetchMovieWeek = () => {
  return axios
    .get(`${baseUrl}trending/all/week?api_key=${API_KEY}`)
    .then((response) => response.data.results);
};

const fetchMovieDetails = (id) => {
  return axios

    .get(`${baseUrl}movie/${id}?api_key=${API_KEY}&language=ru-UA`)
    .then((response) => response.data);
};

const fetchMovieSearch = (query) => {
  return axios
    .get(
      `${baseUrl}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then((response) => response.data.results);
};

export default {
  fetchMovieWeek,
  fetchMovieDetails,
  fetchMovieSearch,
};

// https://api.themoviedb.org/3/search/movie?api_key=9baa31431303788a98a8768543b87306&language=en-US&query=Doom&page=1&include_adult=false
