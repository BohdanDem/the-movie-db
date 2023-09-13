import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {posterURL} from "../../constants/urls";
import {IMovieDetails} from "../../interfaces/movieInterface";
import {movieService} from "../../services/movieService";

const MoviesListCardDetails = () => {

    const {id} = useParams<{ id: string }>()
    const [ movieDetails, setMovieDetails ] = useState<IMovieDetails>(null);

    useEffect(() => {movieService.getById(+id).then(({data}) => setMovieDetails(data))}, [id])

    console.log(movieDetails, id);
    const {poster_path, title, overview, vote_average, genres, release_date, runtime} = movieDetails

    return (
        <div>
            <img src={posterURL + poster_path} alt={title}/>
            <div>
                <h2>{title}</h2>
                <div>{overview}</div>
            </div>
        </div>
    );
};

export default MoviesListCardDetails;