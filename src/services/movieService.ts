import {apiService, IRes} from "./apiService";
import {urls} from "../constants/urls";
import {IMovieRes} from "../redux/slices/moviesSlice";

const movieService = {
    getAll():IRes<IMovieRes>{
        return apiService.get(urls.movies)
    }
}

export {
    movieService
}