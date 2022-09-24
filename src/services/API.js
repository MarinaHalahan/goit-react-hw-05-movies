import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '63c49d80fa037ae8f982024576ca5e08';

export const getTrendingFilms = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
