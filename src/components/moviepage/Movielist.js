import { useEffect, useState } from "react";

const MovieList = ({ request }) => {
    const [movies, setMovies] = useState([]);
     
    useEffect(() => {
        getMoviesByRequest()
            .then(data => setMovies(data.results))
            .catch(error => {
                console.log('error.message', error.message);
            });
    }, []);
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
                <li key={item.id}>
                        <a href="">{item.title }</a>
                </li>
            </ul>
        </>
    )
}
export default MovieList;