import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces/movieInterface";
import css from './ MoviesListCard.module.css'
import PosterPreview from "../PosterPreview/PosterPreview";

interface IProps extends PropsWithChildren {
    movie: IMovie,
}

const MoviesListCard:FC<IProps> = ({movie}) => {

    const {title, vote_average, poster_path} = movie

    return (
        <div className={css.movieCard}>
            <PosterPreview poster_path={poster_path} title={title}/>
            <div>{title}</div>
        </div>
    );
};

export default MoviesListCard;