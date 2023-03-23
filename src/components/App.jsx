// import Homepage from "pages/Homepage";
import { PageNotFound } from "pages/Notfound";
import { Routes, Route, Link } from "react-router-dom";
// import MoviePage from "pages/Moviepage";
import MovieDetailes from "./moviedetales/MovieDetales";
// import CastList from "./cast/Cast";
// import Review from "./rewiev/Review";
import Layout from "./layout/Layout";
import { lazy } from "react";


const Homepage=lazy(()=>import('../pages/Homepage'));
const MoviePage=lazy(()=>import('../pages/Moviepage'));
const CastList=lazy(()=>import('././cast/Cast'));
const Review=lazy(()=>import('././rewiev/Review'));


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
