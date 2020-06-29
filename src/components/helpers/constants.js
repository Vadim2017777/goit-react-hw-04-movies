const INITIAL_STATE_SEARCHBAR = {
  articles: [],
  loading: false,
  error: null,
  query: '',
  page: 1,
  showModal: false,
  largeImageURL: '',
};

const INITIAL_STATE_GALLERY = {
  query: '',
};

const baseUrl = 'https://api.themoviedb.org/3/';

const API_KEY = '9baa31431303788a98a8768543b87306';

export { INITIAL_STATE_SEARCHBAR, INITIAL_STATE_GALLERY, baseUrl, API_KEY };
