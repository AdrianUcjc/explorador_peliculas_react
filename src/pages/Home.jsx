// Hooks necesarios
import { useState, useEffect } from "react"; // useState para guardar y actualizar datos del componente, useEffect ejecuta código cuando el componenete se monta.
import MovieCard from "../components/MovieCard.jsx";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function Home() {
  const [searchQuery, setSearchQuery] = useState(""); //estado guarda películas a mostrar
  const [movies, setMovies] = useState([]); //estado que almacena array peliculas a mostrar
  const [loading, setLoading] = useState(true); // estado indicador de uso de api
  const [error, setError] = useState(null); // guarda mens. error (null -> ahora no hay error todavía)

  // Cargar películas populares al montar
  useEffect(() => {
    const loadPopular = async () => { // func. asíncromna para usar await
      try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`); // fetch no considera errores HTTP
        if (!response.ok) throw new Error("Error en la petición"); // por eso response.ok
        const data = await response.json(); //convertir cuerpo de respuesta a objeto
        setMovies(data.results);
      } catch (err) {
        setError("Error al cargar las pelis.");
      } finally {
        setLoading(false); // ejecuta si func. o falla -> evitamos indicador de carga quede activo indef.
      }
    };
    loadPopular(); //ejecutar func. definida
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault(); //evitar recarga de pág al enviar form.
    if (!searchQuery.trim()) return;

    setLoading(true); //activar indicador de carga
    setError(null); //errores anteriores limpiados
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`
      );
      if (!response.ok) throw new Error("Error en la petición");
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError("Error al realizar la búsqueda.");
    } finally {
      setLoading(false);
    }
  };

  return ( // en JSX se define la estructura que React mostrará
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar películas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading">Cargando...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;