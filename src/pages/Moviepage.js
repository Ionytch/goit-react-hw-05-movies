import MovieList from "components/moviepage/Movielist";
import MovieSearchList from "components/moviepage/Moviesearch";
import Searchbar from "components/searchform/Searchform";
import { SearchbarStyle } from "components/searchform/Searchform.styled";
import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const MoviePage = () => {
    // const [request, setRequest] = useState('');
    const[searchParams,setSearchParams]=useSearchParams();
    const request = searchParams.get('request') ?? '';
    console.log(request);

    const handleChange = e => {
        // setSearchParams (e.currentTarget.value.toLowerCase());
        const requestValue=e.currentTarget.value;
        // if(searchParams===''){
        //     return setSearchParams({});            
        // }
        setSearchParams({request:requestValue});
   };
    
    // const updateQuery=evt=>{
    //     evt.preventDefault();
    //     const requestValue = evt.currentTarget.elements.search.value;
    //     console.log(requestValue);
    //     // if(searchParams===''){
    //     //     return setSearchParams({});            
    //     // }
    //     setSearchParams({ request: requestValue });
        
    //     reset();
        
    // }
    
    // const reset = () => {
    //     setSearchParams('');
    // };
    
const updateQuery = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const normalizedQuery = form.elements.search.value.trim().toLowerCase();

    setSearchParams(normalizedQuery !== '' ? { request: normalizedQuery } : {});

    form.reset();
    };
    
    // const reset = () => {
    //     setSearchParams('');
    // };
    
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
            {/* <Searchbar onSubmit={setRequest}></Searchbar> */}
            <MovieSearchList request={request}></MovieSearchList>
        </>
    )
 }

export default MoviePage;
// onChange={handleChange}
// value={request}