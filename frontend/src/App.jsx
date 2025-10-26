import { useEffect, useState } from "react";
import { getPopularMovies } from "./services/services";
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Filmes Populares</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: "200px" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>

  );
}

export default App