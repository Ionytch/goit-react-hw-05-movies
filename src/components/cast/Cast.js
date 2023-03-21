import { getCastMoviesByID } from "components/api/Api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CastList=()=>{
    const[cast,setCast]=useState([]);
    const {id} = useParams();
    console.log(id);
    console.log(cast);
   


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
        <img src="" alt=""></img>
        <div>Name: {item.name}</div>
        <div>Character: {item.character}</div>
        </li>
        
    </ul>)}

    </>
)
};


export default CastList;
