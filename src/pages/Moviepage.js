import MovieList from "components/moviepage/Movielist";
import MovieSearchList from "components/moviepage/Moviesearch";
import Searchbar from "components/searchform/Searchform";
import { useState } from "react";

const MoviePage = () => {
    const [request, setRequest] = useState('');
    
    return (
        <>
            <Searchbar onSubmit={setRequest}></Searchbar>
            <MovieSearchList request={request.request}></MovieSearchList>
        </>
    )
 }

export default MoviePage;