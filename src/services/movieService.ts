import {apiService, IRes} from "./apiService";
import {urls} from "../constants/urls";
import {IMovieRes} from "../redux/slices/moviesSlice";
import {IMovieDetails} from "../interfaces/movieInterface";

const movieService = {
    getAll:():IRes<IMovieRes> => apiService.get(urls.movies),
    getById: (id: number): IRes<IMovieDetails> => apiService.get(urls.movieDetails + id),
}

export {
    movieService
}