import { trendingMovies } from "components/api/Api";
import MovieList from "components/moviepage/Movielist";
import { useEffect, useState } from "react";
import { HomepageStyle, HompageTitle } from "./Homepage.styled";

const Homepage = () => { 
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        trendingMovies()
            .then(data => setMovies(data.results))
            .catch(error => {
                console.log('error.message', error.message);
            });
    }, []);


    return (
        <HomepageStyle>
            <HompageTitle>Trending today</HompageTitle>
            {
                movies.map(item=><MovieList key={item.id} data={item} />)
            }
            
        
    </HomepageStyle>
)

}

export default Homepage;


