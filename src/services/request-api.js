import axios from 'axios';

const API_KEY = '8c011024daf9ab6b31dbbb1d29e7525a';
const BASE_URL = 'https://api.themoviedb.org/3';

 async function getMoviesPopular() {
  const response = await axios(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  return response;
}

 async function getMovieSearch(searchQuery) {
  const response = await axios(
    `${BASE_URL}/search/movie/${searchQuery}?api_key=${API_KEY}`
  );
  return response;
}

 async function getMovieDetails(movieId) {
  const response = await axios(
    `${BASE_URL}/movies/${movieId}?api_key=${API_KEY}`
  );
  return response;
}

 async function getActors(movieId) {
  const response = await axios(
    `${BASE_URL}/movies/${movieId}/credits?api_key=${API_KEY}`
  );
  return response;
}

 async function getMovieReviews(movieId) {
  const response = await axios(
    `${BASE_URL}/movies/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response;
}

export default (getActors, getMovieDetails, getMovieReviews, getMovieSearch, getMoviesPopular);