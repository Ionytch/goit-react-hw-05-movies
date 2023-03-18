import { trendingMovies } from "components/api/Api";
import { useEffect, useState } from "react";

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
        <div style={{
           
        display: 'flex',
        justifyContent: 'center',
            alignItems: 'center',
        flexDirection: 'column',
         }}>
            <h2>Trending today</h2>
            {
                movies.map(item=><ul style={{
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
            </ul>)
            }
            
        
    </div>
)

}

export default Homepage;