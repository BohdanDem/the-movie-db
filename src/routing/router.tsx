import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MovieListPage from "../pages/MovieListPage";
import {appRoutes} from "./appRoutes";
import GenresPage from "../pages/GenresPage";
import SearchPage from "../pages/SearchPage";
import MoviesListCardPage from "../pages/MoviesListCardPage";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        errorElement: <h2>The resource you requested could not be found.</h2>,
        children: [
            {
                index: true,
                element: <Navigate to={appRoutes.Movies}/>
            },
            {
                path: appRoutes.Movies,
                element: <MovieListPage/>
            },
            {
                path: appRoutes.Genres,
                element: <GenresPage/>
            },
            {
                path: appRoutes.Search,
                element: <SearchPage/>
            },
            {
                path: appRoutes.MoviesListCard,
                element: <MoviesListCardPage/>
            }
        ]
    }
]);

export {
    router
}