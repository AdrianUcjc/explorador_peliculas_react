import { useMovieContext } from "../contexts/MovieContext.jsx";

function MovieCard({ movie }) {
  const { isFavorite, addFavorite, removeFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  const year = movie.release_date ? movie.release_date.split("-")[0] : "Sin fecha";

  return (
    <div className="movie-card">
      <div className="poster">
        {movie.poster_path ? (
          <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />
        ) : (
          <div className="no-poster">Sin póster</div>
        )}
        <div className="overlay">
          <button className={favorite ? "heart active" : "heart"} onClick={handleFavorite}>
            {favorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="info">
        <h3>{movie.title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
