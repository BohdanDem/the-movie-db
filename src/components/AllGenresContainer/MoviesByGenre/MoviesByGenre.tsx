import React, {useEffect} from 'react';
import css from './MoviesByGenre.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";
import {moviesActions} from "../../../redux/slices/moviesSlice";
import MoviesListCard from "../../MovieContainer/ MoviesListCard/ MoviesListCard";
import Pagination from "../../Pagination/Pagination";

const MoviesByGenre = () => {

    const {id, name} = useAppSelector(state => state.singleGenreId);

    const dispatch = useAppDispatch();
    const {results} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1', with_genres: `${id}`});

    useEffect(() => {
        dispatch(moviesActions.setAllByGenre({page: +query.get('page'), with_genres: +query.get('with_genres')}))
    }, [dispatch, query])

    return (
        <div>
            <div className={css.header}>{name}</div>
            <div className={css.wrapper}>{results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
            <Pagination/>
        </div>
    );
};

export default MoviesByGenre;
