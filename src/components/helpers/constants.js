const INITIAL_STATE_SEARCHBOX = {
  value: "",
};

const INITIAL_STATE_GALLERY = {
  query: "",
};

const INITIAL_STATE_HOMEPAGE = {
  movies: [],
};

const INITIAL_STATE_MOVIECAST = {
  data: [],
  error: null,
};

const INITIAL_STATE_REVIEW = {
  data: [],
  error: null,
};

const INITIAL_STATE_MOVIEDETAILS = {
  movie: [],
  error: null,
};
const INITIAL_STATE_MOVIE = {
  movies: [],
  loading: false,
  error: null,
};

const baseUrl = "https://api.themoviedb.org/3/";

const API_KEY = "9baa31431303788a98a8768543b87306";

export {
  INITIAL_STATE_SEARCHBOX,
  INITIAL_STATE_HOMEPAGE,
  INITIAL_STATE_MOVIE,
  INITIAL_STATE_MOVIECAST,
  INITIAL_STATE_REVIEW,
  INITIAL_STATE_MOVIEDETAILS,
  baseUrl,
  API_KEY,
};
