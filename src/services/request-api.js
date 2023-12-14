import axios from 'axios';

const API_KEY = '8c011024daf9ab6b31dbbb1d29e7525a';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getMoviesPopular() {
  const response = await axios(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  console.log(response);
  return response;
}

export async function getMovieSearch(searchQuery) {
  const response = await axios(
    `${BASE_URL}/search/${searchQuery}?api_key=${API_KEY}`
  );
  return response;
}

export async function getMovieDetails(movieId) {
  const response = await axios(
    `${BASE_URL}/movies/${movieId}?api_key=${API_KEY}`
  );
  return response;
}

export async function getActors(movieId) {
        const response = await axios(
                `${BASE_URL}/movies/${movieId}?api_key=${API_KEY}`
              );
              return response;
}