import { getMoviesByID } from "components/api/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailes = () => {
  const [movies, setMovies] = useState(null);
     const {id} = useParams();
    console.log(id);
    
     
    useEffect(() => {
        // if (!id) { return };
        getMoviesByID(id)
            .then(data => setMovies(data.results))
            .catch(error => {
                console.log('error.message', error.message);
            });
    }, []);
    
    return (
        <>
            <img src={movies.backdrop_path} alt={movies.title}></img>
            <h2>{movies.title}</h2>
            <p>User score</p>
            <ul>
                <li>Overview { }</li>
                <li>Genres{ }</li>
            </ul>
        </>
    )
}

export default MovieDetailes;