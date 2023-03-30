// import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { MovieItem, MovielistStyle } from "./Movielist.styled";

const MovieList = ({ data }) => {
    const location=useLocation();
    // const backLink=useRef(location.state?.from??'/')

    console.log(data.id);
    return (
        <>
        <MovielistStyle >
                <MovieItem key={data.id}>
                    <Link to={`/movies/${data.id}`} state={{from:location}}>{data.title }</Link>
                </MovieItem>
            </MovielistStyle>
        </>
    )
}
export default MovieList;