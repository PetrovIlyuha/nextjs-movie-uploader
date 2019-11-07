import axios from "axios";

const MOVIE_DATA = [];
const BASE_URL = "http://localhost:3000";

const CATEGORY_DATA = [
  { id: "c-0", name: "all" },
  { id: "c-1", name: "drama" },
  { id: "c-2", name: "action" },
  { id: "c-3", name: "adventure" },
  { id: "c-4", name: "crime" },
  { id: "c-5", name: "fantasy" },
  { id: "c-6", name: "thriller" }
];

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
      reject("Something went Wrong...we are working on it...");
    }, 200);
  });
};

export const getMovies = () => {
  return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data);
};

export const createMovie = movie => {
  movie.id = Math.random()
    .toString(36)
    .substr(2, 6);
  return axios.post(`${BASE_URL}/api/v1/movies`, movie).then(res => res.data);
};

export const getMovieById = id => {
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
};

export const updateMovie = movie => {
  return axios
    .patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then(res => res.data);
};

export const deleteMovie = id => {
  return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
};
