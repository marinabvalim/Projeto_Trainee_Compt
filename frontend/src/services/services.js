import axios from "axios";

const API_KEY = "007fdd1e37c8582f927977e57d106263";
const BASE_URL = "https://api.themoviedb.org/3";


const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = async () => {
  try {
    const response = await api.get("/movie/popular", {
      params: {
        language: "en-US",
        page: 4,
      },
    });
    return response.data.results; 
  } catch (error) {
    console.error("Erro ao buscar filmes populares:", error);
    return [];
  }
};