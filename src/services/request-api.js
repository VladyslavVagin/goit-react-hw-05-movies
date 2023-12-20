import axios from 'axios';

const API_KEY = '8c011024daf9ab6b31dbbb1d29e7525a';
const BASE_URL = 'https://api.themoviedb.org/3';
export const base_url_image = 'https://image.tmdb.org/t/p/w500/';

 export async function getMoviesPopular() {
  const response = await axios(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response;
}

export async function getMovieSearch(query, page) {
  const response = await axios(
    `${BASE_URL}/search/movie?query=${query}&page=${page}&api_key=${API_KEY}`
  );
  return response;
}

 export async function getMovieDetails(movieId) {
  const response = await axios(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return response;
}

 export async function getActors(movieId) {
  const response = await axios(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response;
}

 export async function getMovieReviews(movieId) {
  const response = await axios(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response;
}
