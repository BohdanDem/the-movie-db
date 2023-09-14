import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IMovieCast, IMovieDetails} from "../../../interfaces/movieInterface";
import {movieService} from "../../../services/movieService";
import css from "./MoviesListCardDetails.module.css"
import PosterPreview from "../../PosterPreview/PosterPreview";
import StarRating from "../../StarRating/StarRating";
import MovieGenres from "../../GenreContainer/Genres/MovieGenres";
import Casts from "../../CastContainer/Casts/Casts";

const MoviesListCardDetails = () => {

    const {id} = useParams()
    const [ movieDetails, setMovieDetails ] = useState<IMovieDetails>(null);

    const [ casts, setCasts ] = useState<IMovieCast>(null);

    const starDimension: string = "45px"
    const starSpacing: string = "7px"

    useEffect(() => {
            movieService.getById(+id).then(({data}) => setMovieDetails(data))
    }, [id])

    useEffect(() => {
        movieService.getCreditsById(+id).then(({data}) => setCasts(data))
    }, [id])

    if (movieDetails && casts) {

        const {poster_path, title, overview, vote_average, genres, release_date, runtime} = movieDetails

        return (
            <div className={css.Movie}>
                <PosterPreview poster_path={poster_path} title={title}/>
                <div className={css.description}>
                    <h2>{title}</h2>
                    <div className={css.overview}>{overview}</div>
                    <div>
                        <h4>Rating:</h4>
                        <StarRating vote_average={vote_average} starDimension={starDimension} starSpacing={starSpacing}/>
                    </div>
                    <div>
                        <h4>Genres:</h4>
                        <MovieGenres genres={genres}/>
                    </div>
                    <div>Release date: {release_date}</div>
                    <div>Duration: {runtime} min</div>
                    <div>
                        <h4>Main cast:</h4>
                        <Casts casts={casts.cast}/>
                    </div>
                </div>
            </div>
        );
    }
};

export default MoviesListCardDetails;