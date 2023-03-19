import { Link } from "react-router-dom";

const MovieList = ({ data }) => {
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
                    <Link to={`/movies/${data.id}`}>{data.title }</Link>
                </li>
            </ul>
        </>
    )
}
export default MovieList;