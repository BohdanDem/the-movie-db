import React, {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../../interfaces/movieInterface";
import css from './SingleGenre.module.css'
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre: IGenre,
}

const SingleGenre:FC<IProps> = ({genre}) => {

    const navigate = useNavigate()
    const {id, name} = genre

    const handleClick = (id: number) => {navigate(`/genres/${id}`, {state: genre})};

    return (
        <div className={css.genre} onClick={() => handleClick(id)}>
            {name}
        </div>
    );
};

export default SingleGenre;