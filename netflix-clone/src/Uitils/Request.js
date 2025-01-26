const API_KEY = process.env.REACT_APP_API_KEY; // Use your .env file to store the API key securely
const BASE_URL = 'https://api.themoviedb.org/3'; // TMDB base URL

const requests = {
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`,
};

export default requests;
