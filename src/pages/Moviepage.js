import MovieList from "components/moviepage/Movielist";
import Searchbar from "components/searchform/Searchform";
import { useState } from "react";

const Moviepage = () => {
    const [request, setRequest] = useState ('');
    return (
        <>
            <Searchbar onSubmit={setRequest}></Searchbar>
            <MovieList request={request}></MovieList>
        </>
    )
 }

export default Moviepage;