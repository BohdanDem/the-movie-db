import {apiService, IRes} from "./apiService";
import {urls} from "../constants/urls";
import {IGenreRes} from "../redux/slices/genresSlice";

const genreService = {
    getAll: (): IRes<IGenreRes> => apiService.get(urls.genres)
}

export {
    genreService
}