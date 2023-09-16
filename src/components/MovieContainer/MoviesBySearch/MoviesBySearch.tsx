import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";
import {moviesActions} from "../../../redux/slices/moviesSlice";
import css from "./MoviesBySearch.module.css"
import MoviesListCard from "../ MoviesListCard/ MoviesListCard";

const MoviesBySearch = () => {
    const dispatch = useAppDispatch();
    const {querySearchData} = useAppSelector(state => state.querySearch);
    const [query, setQuery] = useSearchParams({page: '1', query: `${querySearchData}`});
    const {results} = useAppSelector(state => state.movies);

    useEffect(() => {
        dispatch(moviesActions.getAllBySearch({page: +query.get('page'), query: query.get('query')}))
    }, [dispatch, query, querySearchData])

    return (
        <div className={css.wrapper}>
            {results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesBySearch;