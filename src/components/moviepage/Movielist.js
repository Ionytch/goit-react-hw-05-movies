import { Link, useLocation } from "react-router-dom";
import { MovieItem, MovielistStyle } from "./Movielist.styled";
import PropTypes from "prop-types";


const MovieList = ({ data }) => {
    const location=useLocation();

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

MovieList.propTypes={
    data: PropTypes.array.isRequired,
};

export default MovieList;