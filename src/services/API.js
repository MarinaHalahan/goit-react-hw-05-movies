import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '63c49d80fa037ae8f982024576ca5e08';

export const getTrendingFilms = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

export const getFilmById = async id => {
  const response = await axios.get(`movie/${id}?api_key=${KEY}&language=en-US`);
  return response.data;
};

export const getCastById = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
};

export const getReviewsById = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=en-USpage=1`
  );
  return response.data.results;
};

export const getFilmBySearchWord = async query => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data.results;
};
