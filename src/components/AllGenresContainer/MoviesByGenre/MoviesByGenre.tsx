import React, {useEffect, useState} from 'react';
import {useAppLocation} from "../../../hooks/routerHooks";
import {IGenre} from "../../../interfaces/movieInterface";
import css from './MoviesByGenre.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";
import {moviesActions} from "../../../redux/slices/moviesSlice";
import MoviesListCard from "../../MovieContainer/ MoviesListCard/ MoviesListCard";
import Pagination from "../../Pagination/Pagination";

const MoviesByGenre = () => {

    const {state} = useAppLocation<IGenre>();
    //const [genreId] = useState<number>(state.id)
    const dispatch = useAppDispatch();
    const {results} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1', with_genres: `${state.id}`});

    useEffect(() => {
        dispatch(moviesActions.setAllByGenre({page: +query.get('page'), with_genres: +query.get('with_genres')}))
    }, [dispatch, query])

    return (
        <div>
            <div className={css.header}>{state.name}</div>
            <div className={css.wrapper}>{results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
            <Pagination/>
        </div>
    );
};

export default MoviesByGenre;
