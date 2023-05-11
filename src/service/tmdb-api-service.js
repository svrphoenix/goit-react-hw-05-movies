import axios from 'axios';

const API_KEY = 'bf6a0fae11fd4c107d4af2168346d5c6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['Authorization'] = API_KEY;

export const fetchMovies = async (additionalUrl, controller) => {
  const { data } = await axios.get(`${additionalUrl}?api_key=${API_KEY}`, {
    signal: controller.signal,
  });
  return data;
};

export const searchMovies = async (query, controller) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}`,
    {
      signal: controller.signal,
    }
  );
  return data;
};
