import Homepage from "pages/Homepage";
import { PageNotFound } from "pages/Notfound";
import { Routes, Route, Link } from "react-router-dom";
import MoviePage from "pages/Moviepage";
import MovieDetailes from "./moviedetales/MovieDetales";

// import Home from "path/to/pages/Home";
// import Movies from "path/to/pages/About";
// import MovieDetails from "path/to/pages/Products";
// import Cast from "path/to/pages/Cast";
// import Reviews from "path/to/pages/Reviews";
// import NotFound from "path/to/pages/NotFound";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
     
     <header style={{
        height: '100px',
        color:'blue',
        backgroundcolor: 'grey',
      }}>
      <nav >
  <Link to="/" end>Home</Link>
  <Link to="/movies">Movies</Link>
      </nav>
      </header> 
      <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:id" element={<MovieDetailes />} >
        {/*  <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />*/}
        </Route>
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </div>
  );
};
