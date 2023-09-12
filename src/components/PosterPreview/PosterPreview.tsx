import React, {FC, PropsWithChildren} from 'react';
import {posterURL} from "../../constants/urls";
import css from './PosterPreview.module.css'

interface IProps extends PropsWithChildren {
    poster_path: string,
    title: string
}

const PosterPreview:FC<IProps> = ({poster_path, title}) => {

    return (
        <div>
            <img className={css.poster} src={posterURL + poster_path} alt={title}/>
        </div>
    );
};

export default PosterPreview;