import MovieList from "components/moviepage/Movielist";
import MovieSearchList from "components/moviepage/Moviesearch";
import Searchbar from "components/searchform/Searchform";
import { SearchbarStyle } from "components/searchform/Searchform.styled";
import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const MoviePage = () => {
    // const [request, setRequest] = useState('');
    const[searchParams,setSearchParams]=useSearchParams();
    const request=searchParams.get('request')??'';

    const handleChange = e => {
        // setSearchParams (e.currentTarget.value.toLowerCase());
        const requestValue=e.currentTarget.value;
        // if(searchParams===''){
        //     return setSearchParams({});            
        // }
        setSearchParams({request:requestValue});
   };
    
    const updateQuery=evt=>{
        evt.preventDefault();
        // const requestValue=evt.target.value;
        if(searchParams===''){
            return ;            
        }
        // setSearchParams({request:requestValue});
        reset();
    }
    
    const reset = () => {
        setSearchParams('');
    };
    
    
    return (
        <>
        <div>
            <form onSubmit={updateQuery}>
            
            <button type="submit" >
      Search
    </button>
    <input type="text" autocomplete="off" autofocus value={request} onChange={handleChange}/>
    </form>
        </div>
            {/* <Searchbar onSubmit={setRequest}></Searchbar> */}
            <MovieSearchList request={request}></MovieSearchList>
        </>
    )
 }

export default MoviePage;