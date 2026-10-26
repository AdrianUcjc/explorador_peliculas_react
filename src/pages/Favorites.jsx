import { useMovieContext } from "../contexts/MovieContext.jsx";
import MovieCard from "../components/MovieCard.jsx";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>Sin favoritos</h2>
        <p>Añade películas.</p>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>Tus favoritos</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
