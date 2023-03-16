import { Routes, Route, Link } from "react-router-dom";
import Home from "path/to/pages/Home";
import Movies from "path/to/pages/About";
import MovieDetails from "path/to/pages/Products";
import Cast from "path/to/pages/Cast";
import Reviews from "path/to/pages/Reviews";
import NotFound from "path/to/pages/NotFound";
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <nav>
  <Link to="/" end>Home</Link>
  <Link to="/movies">Movies</Link>
  </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
