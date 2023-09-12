import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MoviesListCard from "../ MoviesListCard/ MoviesListCard";
import css from './ MoviesListCards.module.css'

const MoviesListCards = () => {

    const dispatch = useAppDispatch();
    const {results} = useAppSelector(state => state.movies);

    useEffect(() => {
        dispatch(moviesActions.getAll())
    }, [dispatch])

    return (
        <div className={css.wrapper}>
            {results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    MoviesListCards
};