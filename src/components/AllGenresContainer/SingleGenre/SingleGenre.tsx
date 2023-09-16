import React, {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../../interfaces/movieInterface";
import css from './SingleGenre.module.css'
import {useNavigate} from "react-router-dom";
import {singleGenreIdActions} from "../../../redux/slices/singleGenreIdSlice";
import {useAppDispatch} from "../../../hooks/reduxHooks";

interface IProps extends PropsWithChildren {
    genre: IGenre,
}

const SingleGenre:FC<IProps> = ({genre}) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const {id, name} = genre

    const handleClick = (id: number) => {
        navigate(`/genres/${id}`, {state: genre})
        dispatch(singleGenreIdActions.setSingleGenreId(genre))
    };

    return (
        <div className={css.genre} onClick={() => handleClick(id)}>
            {name}
        </div>
    );
};

export default SingleGenre;