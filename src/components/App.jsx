import Homepage from "pages/Homepage";
import { PageNotFound } from "pages/Notfound";
import { Routes, Route, Link } from "react-router-dom";
import MoviePage from "pages/Moviepage";
import MovieDetailes from "./moviedetales/MovieDetales";
import CastList from "./cast/Cast";
import Review from "./rewiev/Review";
import Layout from "./layout/Layout";



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
     
     
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage />} />
         <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:id" element={<MovieDetailes />} >
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<Review />} />
        </Route>
        <Route path="*" element={<PageNotFound />} /> 
        </Route>
      </Routes>
    </div>
  );
};
