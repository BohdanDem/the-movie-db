import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {moviesActions} from "../../../redux/slices/moviesSlice";
import MoviesListCard from "../ MoviesListCard/ MoviesListCard";
import css from './ MoviesListCards.module.css'
import {useSearchParams} from "react-router-dom";

const MoviesListCards = () => {

    const dispatch = useAppDispatch();
    const {results} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesActions.getAll({page: +query.get('page')}))
    }, [dispatch, query])

    return (
        <div id={css.wrapper}>
            {results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    MoviesListCards
};