import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import css from './MovieSearchForm.module.css'
import {useAppDispatch} from "../../hooks/reduxHooks";
import {ISearch} from "../../interfaces/movieInterface";
import {searchQueryActions} from "../../redux/slices/searchQuerySlice";

interface IState {
    query: string
}

const MovieSearchForm = () => {

    const {reset, register, handleSubmit} = useForm<IState>();
    const dispatch = useAppDispatch();

    const setSearchMovie:SubmitHandler<ISearch> = async (query) => {
        dispatch(searchQueryActions.setSearchQuery(query))
        reset()
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(setSearchMovie)}>
            <input type="text" placeholder={'Type your query to search'} {...register('query')}/>
            <button>Search</button>
        </form>
    );
};

export default MovieSearchForm;
