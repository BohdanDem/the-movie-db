import React from 'react';
import {MoviesListCards} from "../components/MovieContainer/ MoviesListCards/ MoviesListCards";
import Pagination from "../components/Pagination/Pagination";
import MovieSearchForm from "../components/MovieSearchForm/MovieSearchForm";
import {useAppSelector} from "../hooks/reduxHooks";
import MoviesBySearch from "../components/MovieContainer/MoviesBySearch/MoviesBySearch";

const SearchPage = () => {

    const {querySearchData} = useAppSelector(state => state.querySearch);

    return (
        <div>
            <MovieSearchForm/>
            {querySearchData ? <MoviesBySearch/> : <MoviesListCards/>}
            <Pagination/>
        </div>
    );
};

export default SearchPage;