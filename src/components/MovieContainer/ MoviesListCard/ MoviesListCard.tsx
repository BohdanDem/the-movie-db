import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces/movieInterface";
import css from './ MoviesListCard.module.css'
import PosterPreview from "../../PosterPreview/PosterPreview";
import StarRating from "../../StarRating/StarRating";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie: IMovie,
}

const MoviesListCard:FC<IProps> = ({movie}) => {

    const navigate = useNavigate()
    const {id, title, vote_average, poster_path} = movie
    const starDimension: string = "15px"
    const starSpacing: string = "1px"

    const handleClick = (id: number) => {navigate(`/movies/${id}`)};

    return (
        <div id={css.movieCard} onClick={() => handleClick(id)}>
            <PosterPreview poster_path={poster_path} title={title}/>
            <StarRating vote_average={vote_average} starDimension={starDimension} starSpacing={starSpacing}/>
            <div>{title}</div>
        </div>
    );
};

export default MoviesListCard;