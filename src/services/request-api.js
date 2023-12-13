import axios from "axios";

const API_KEY = '8c011024daf9ab6b31dbbb1d29e7525a';
const BASE_URL = 'https://api.themoviedb.org/3';
const query = '/trending/all/day';

async function getMoviesAPI () {
        const response = await axios(`${BASE_URL}${query}?api_key=${API_KEY}`);
        console.log(response);
        return response;
}

export default getMoviesAPI;