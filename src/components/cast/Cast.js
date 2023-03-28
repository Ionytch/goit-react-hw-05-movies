import { getCastMoviesByID } from "components/api/Api";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";



const CastList=()=>{
    const[cast,setCast]=useState([]);
    const {id} = useParams();
    console.log(id);
    console.log(cast);
   const image_URL = "http://image.tmdb.org/t/p/";
    const imageSize = "w185";


    useEffect(() => {
        if (!id) { return };
       getCastMoviesByID(id)
           .then(({cast}) => setCast(cast))
           .catch(error => {
               console.log('error.message', error.message);
           });
   }, [id]);
    
return (
    <>
   
    {cast.map(item=>
    <ul key={item.id}>
        <li key={item.id}>
        <img src={`${image_URL}${imageSize}${item.profile_path}
`} alt={item.name}></img>
        <div>Name: {item.name}</div>
        <div>Character: {item.character}</div>
        </li>
        
    </ul>)}

    </>
)
};


export default CastList;
