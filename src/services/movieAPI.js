import axios from "axios";

import { baseUrl, API_KEY } from "../helpers/constants";

const fetchMovieWeek = async () => {
  try {
    const response = await axios(
      `${baseUrl}trending/all/week?api_key=${API_KEY}`
    );
    const data = response.data.results;
    return data;
  } catch (error) {
    throw error;
  }
};

const fetchMovieDetails = async (id) => {
  try {
    const response = await axios(
      `${baseUrl}movie/${id}?api_key=${API_KEY}&language=ru-UA`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchMovieSearch = async (query) => {
  try {
    const response = await axios(
      `${baseUrl}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

const fetchMovieCast = async (movieId) => {
  try {
    const response = await axios(
      `${baseUrl}movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data.cast;
  } catch (error) {
    throw error;
  }
};

const fetchMovieReview = async (movieId) => {
  try {
    const response = await axios(
      `${baseUrl}movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export default {
  fetchMovieWeek,
  fetchMovieDetails,
  fetchMovieSearch,
  fetchMovieCast,
  fetchMovieReview,
};
