import React from 'react';
import {MoviesListCards} from "../components/MovieContainer/ MoviesListCards/ MoviesListCards";
import Pagination from "../components/Pagination/Pagination";

const MovieListPage = () => {
    return (
        <div>
            <MoviesListCards/>
            <Pagination/>
        </div>
    );
};

export default MovieListPage;