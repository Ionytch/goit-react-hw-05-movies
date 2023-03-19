import { getMoviesByRequest } from "components/api/Api";
import { useEffect, useState } from "react";
import MovieList from "./Movielist";

const MovieSearchList = ({ request }) => {
    const [movies, setMovies] = useState([]);
    
     
    useEffect(() => {
        if (!request) { return };
        getMoviesByRequest({request})
            .then(data => setMovies(data.results))
            .catch(error => {
                console.log('error.message', error.message);
            });
    }, [request]);
    return (
        <>
        {
            movies.map(item=><MovieList key={item.id} data={item} />)
        }
        </>
    )
}
export default MovieSearchList;