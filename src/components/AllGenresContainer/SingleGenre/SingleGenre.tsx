import React, {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../../interfaces/movieInterface";
import css from './SingleGenre.module.css'

interface IProps extends PropsWithChildren {
    genre: IGenre,
}

const SingleGenre:FC<IProps> = ({genre}) => {
    return (
        <div className={css.genre}>
            {genre.name}
        </div>
    );
};

export default SingleGenre;