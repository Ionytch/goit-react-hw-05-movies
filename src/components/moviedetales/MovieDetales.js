import { getImagesByMovieID, getMoviesByID } from "components/api/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailes = () => {
  const [movies, setMovies] = useState({});
  const[image, setImage]=useState();
     const {id} = useParams();
    console.log(id);
    
     
    useEffect(() => {
         if (!id) { return };
        getMoviesByID(id)
            .then((res) => setMovies(res))
            .catch(error => {
                console.log('error.message', error.message);
            });
    }, [id]);

    useEffect(() => {
        if (!id) { return };
       getImagesByMovieID(id)
           .then((res) => setImage(res))
           .catch(error => {
               console.log('error.message', error.message);
           });
   }, [id]);

    
    return (
        <>
            <img src={movies.poster_path    
            } alt={movies.title}></img>
            <h2>{movies.title}</h2>
            <p>User score</p>
            <ul>
                <li>Overview: <p>{movies.overview }</p></li>
                <li>Genres:
                    {/* <p>{movies.genres.map(item=><ul>
                    <li key={item.id}>{item.name}</li>
                </ul>) }</p> */}
                </li>
            </ul>
        </>
    )
}

export default MovieDetailes;

// then(data => setMovies(data.results))