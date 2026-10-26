import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export function useMovieContext() { //hook para acceder al contexto de peiculas.
  // evitamos useContest(MovieContext)
  return useContext(MovieContext);
}

export function MovieProvider({ children }) { // Estado almacenador de pelis favoritas.
  const [favorites, setFavorites] = useState([]);

  // Cargar favoritos desde localStorage al iniciar
  useEffect(() => {
    const guardados = localStorage.getItem("favorites");
    if (guardados) {
      setFavorites(JSON.parse(guardados));
    }
  }, []);

  // Guardar favoritos cada vez que cambien
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const removeFavorite = (movieId) => {
    setFavorites(favorites.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = { favorites, addFavorite, removeFavorite, isFavorite };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}
