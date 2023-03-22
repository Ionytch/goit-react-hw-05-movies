import { getMoviesReview } from "components/api/Api";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Review=()=>{
    const [review, setReview]=useState([]);
    const {id} = useParams();
    console.log(id);
    console.log(review);

    useEffect(() => {
        if (!id) { return };
       getMoviesReview(id)
           .then(({results}) => setReview(results))
           .catch(error => {
               console.log('error.message', error.message);
           });
   }, [id]);

    return <>
    {review.map(item=>
    <ul key={item.id}>
        <li key={item.id}>
        <div>Name: {item.author}</div>
        <div>review: {item.content}</div>
        </li>
        
    </ul>)}
    </>
};

export default Review;