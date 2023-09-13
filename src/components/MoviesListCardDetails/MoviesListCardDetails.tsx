import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {posterURL} from "../../constants/urls";
import {IMovieDetails} from "../../interfaces/movieInterface";
import {movieService} from "../../services/movieService";
import css from "./MoviesListCardDetails.module.css"

const MoviesListCardDetails = () => {

    const {id} = useParams()
    const [ movieDetails, setMovieDetails ] = useState<IMovieDetails>(null);

    useEffect(() => {
            movieService.getById(+id).then(({data}) => setMovieDetails(data))
    }, [id])

    if (movieDetails!) {

        const {poster_path, title, overview, vote_average, genres, release_date, runtime} = movieDetails

        return (
            <div className={css.Movie}>
                <img src={posterURL + poster_path} alt={title}/>
                <div>
                    <h2>{title}</h2>
                    <div>{runtime}</div>
                </div>
            </div>
        );
    }
};

export default MoviesListCardDetails;