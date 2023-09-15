import {apiService, IRes} from "./apiService";
import {urls} from "../constants/urls";
import {IMovieRes} from "../redux/slices/moviesSlice";
import {IMovieCast, IMovieDetails} from "../interfaces/movieInterface";

const movieService = {
    getAll:(page:number):IRes<IMovieRes> => apiService.get(urls.movies, {params: {page}}),
    getById: (id: number): IRes<IMovieDetails> => apiService.get(urls.movieDetails + id),
    getCreditsById: (id: number): IRes<IMovieCast> => apiService.get(urls.credits(id)),
    getAllByGenre:(page:number, with_genres:number):IRes<IMovieRes> => apiService.get(urls.movies, {params: {page, with_genres}}),
}

export {
    movieService
}