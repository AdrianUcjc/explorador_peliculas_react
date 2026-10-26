import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext.jsx"; // Provider del contexto: acceso a los favoritos
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";

function App() {
  return (
    <MovieProvider>
      <NavBar /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/favorites" element={<Favorites />} /> 
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App; // Export de App a usa en Main
