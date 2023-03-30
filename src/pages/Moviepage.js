
import MovieSearchList from "components/moviepage/Moviesearch";
import { useSearchParams } from "react-router-dom";

const MoviePage = () => {
    
    const[searchParams,setSearchParams]=useSearchParams();
    const request = searchParams.get('request') ?? '';
    console.log(request);

    
        
const updateQuery = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const normalizedQuery = form.elements.search.value.trim().toLowerCase();

    setSearchParams(normalizedQuery !== '' ? { request: normalizedQuery } : {});

    form.reset();
    };
    
       
    return (
        <>
        <div>
            <form onSubmit={updateQuery}>
        <input type="text" name="search"  />    
            <button type="submit" >
      Search
    </button>
    
    </form>
        </div>
            <MovieSearchList request={request}></MovieSearchList>
        </>
    )
 }

export default MoviePage;
