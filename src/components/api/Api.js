import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=b0f38b00a26cbbd8375355a8114cd130';
const tranding = '/trending/movie/day';
const movie = '/movie';
const movieSearch = '/search/movie';


export const trendingMovies = async()=>{
try {
    const response = await axios(`${BASE_URL}${tranding}?${API_KEY}`)
    return response.data;
} catch (error) {
    console.log(error.message);
}
};
export const getMoviesByRequest = async({request})=>{
try {
    const response = await axios(`${BASE_URL}${movieSearch}?${API_KEY}&query=${request}&language=en-US&page=1&include_adult=false`)
    return response.data;
} catch (error) {
    console.log(error.message);
}
};
export const getMoviesByID = async(id)=>{
try {
    const response = await axios(`${BASE_URL}${movie}/${id}?${API_KEY}&language=en-US`)
    return response.data;
} catch (error) {
    console.log(error.message);
}
};

export const getImagesByMovieID = async(id)=>{
    try {
        const response = await axios(`${BASE_URL}${movie}/${id}/images?${API_KEY}&language=en-US`)
        return response;
    } catch (error) {
        console.log(error.message);
    }
    };

export const getCastMoviesByID = async(id)=>{
        try {
            const response = await axios(`${BASE_URL}${movie}/${id}/credits?${API_KEY}&language=en-US`)
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
        };

    export const getMoviesReview = async(id)=>{
            try {
                const response = await axios(`${BASE_URL}${movie}/${id}/reviews?${API_KEY}&language=en-US&page=1`)
                return response.data;
            } catch (error) {
                console.log(error.message);
            }
            };
    