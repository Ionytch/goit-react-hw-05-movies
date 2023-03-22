import { getMoviesByRequest } from "components/api/Api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "./Movielist";

const MovieSearchList = ({request}) => {
    const [movies, setMovies] = useState([]);
    // const[searchParams,setSearchParams]=useSearchParams();
    // const request=searchParams.get('request')??'';

    // const updateQuery=evt=>{
    //     const movieIdValue=evt.target.value;
    //     if(movieIdValue===''){
    //         return searchParams({});            
    //     }
    //     setSearchParams({movieID:movieIdValue});
    // }
    
     
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
        {/* <div>
            <input type="text" value={request} onChange={updateQuery}/>
        </div> */}
        {
            movies.map(item=><MovieList key={item.id} data={item} />)
        }
        </>
    )
}
export default MovieSearchList;