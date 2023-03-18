import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=b0f38b00a26cbbd8375355a8114cd130';
const tranding = '/trending/movie/day';
const movie = '/movie';


export const trendingMovies = async()=>{
try {
    const response = await axios(`${BASE_URL}${tranding}?${API_KEY}`)
    return response.data;
} catch (error) {
    console.log(error.message);
}
};
export const getMoviesByRequest = async()=>{
try {
    const response = await axios(`${BASE_URL}${movie}?${API_KEY}&language=en-US&page=1&include_adult=false`)
    return response.data;
} catch (error) {
    console.log(error.message);
}
};

