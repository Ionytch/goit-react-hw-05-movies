import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ data }) => {
    const location=useLocation();
    const backLink=useRef(location.state?.from??'/')

    console.log(data.id);
    return (
        <>
        <ul style={{
                    display: 'flex',                    
        justifyContent: 'center',
                alignItems: 'center',
        listStyle: 'none',
        fontSize: 20,
        color: "grey",
      }}>
                <li key={data.id}>
                    <Link to={`/movies/${data.id}`} state={{from:location}}>{data.title }</Link>
                </li>
            </ul>
        </>
    )
}
export default MovieList;