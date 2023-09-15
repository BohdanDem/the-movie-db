import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {genresActions} from "../../../redux/slices/genresSlice";
import SingleGenre from "../SingleGenre/SingleGenre";
import css from './AllGenres.module.css'

const AllGenres = () => {

    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genres);

    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch])

    return (
        <div className={css.wrapper}>
            {genres.map(genre => <SingleGenre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default AllGenres;