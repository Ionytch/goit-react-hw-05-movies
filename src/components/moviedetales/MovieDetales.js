import { getCastMoviesByID, getImagesByMovieID, getMoviesByID, getMoviesReview } from "components/api/Api";
import CastList from "components/cast/Cast";
import Genres from "components/moviepage/Genres";
import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetailes = () => {
  const [movies, setMovies] = useState([]);
const location=useLocation();
    const backLink = useRef(location.state?.from ?? '/');
    const image_URL = "http://image.tmdb.org/t/p/";
    const imageSize = "w300";

     const {id} = useParams();
    console.log(id);
    console.log(movies);
     
     
    useEffect(() => {
         if (!id) { return };
        getMoviesByID(id)
            .then((res) => setMovies(res))
            .catch(error => {
                console.log('error.message', error.message);
            });
    }, [id]);

        
    return (
        <>
         <Link to={backLink.current}>Back</Link>
            <img src={`${image_URL}${imageSize}${movies.poster_path}`    
            } alt={movies.title}></img>
            <h2>{movies.title}</h2>
            <p>User score: {movies.vote_average}</p>
            
                <div>Overview: <p>{movies.overview }</p></div>
                <div>Genres:
                    {!movies.genres||<Genres data={movies.genres}></Genres>}
                </div>
                
                <div>additional information
                    <ul>
                        <li>
                            <Link to={`cast`}>cast</Link>
                        </li>
                        <li>
                            <Link to={`reviews`} state={{from:location}}>reviews</Link>
                        </li>
                    </ul>
                    <Suspense fallback={<div>loading...</div>}>
                    <Outlet />
                    </Suspense>
                </div>
            
        </>
    )
}

export default MovieDetailes;
