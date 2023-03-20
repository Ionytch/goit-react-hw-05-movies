import { getCastMoviesByID, getImagesByMovieID, getMoviesByID } from "components/api/Api";
import CastList from "components/cast/Cast";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetailes = () => {
  const [movies, setMovies] = useState([]);
  const[image, setImage]=useState();
  const[cast,setCast]=useState([]);
     const {id} = useParams();
    console.log(id);
    console.log(movies.genres);
    console.log (cast);
     
    useEffect(() => {
         if () { return };
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

useEffect(() => {
         if (!id) { return };
        getCastMoviesByID(id)
            .then((res) => setCast(res.cast))
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
            
                <div>Overview: <p>{movies.overview }</p></div>
                <div>Genres:
                    <div>{movies.genres.map(item=><ul>
                    <li key={item.id}>{item.name}</li>
                </ul>) }</div>
                </div>
                <div>additional information
                    {/* <CastList data={cast}/> */}
                </div>
            
        </>
    )
}

export default MovieDetailes;

// then(data => setMovies(data.results))