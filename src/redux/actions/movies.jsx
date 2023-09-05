import { http } from "../../helpers/http";
const { REACT_APP_BASEURL_TMDB: URL_TMDB, REACT_APP_APIKEY_TMDB: API_KEY } = process.env;

const getMovies = (url) => {
    if (!url) {
        return async (dispatch) => {
            const {
                data
            } = await http().get(`${URL_TMDB}/movie/popular?api_key=${API_KEY}`);
            dispatch({
                type: "SET_GET_MOVIES",
                payload: {
                    movies: data.results,
                    pageInfo: data.pageInfo
                },

            });
        };
    }
};

const getDetailMovies = (id) => {
    return async (dispatch) => {
        const {
            data
        } = await http().get(`${URL_TMDB}/movie/${id}?api_key=${API_KEY}`);
        dispatch({
            type: "SET_GET_DETAIL_MOVIE",
            payload: data,
        });
    };
};


export {
    getMovies,
    getDetailMovies,
};