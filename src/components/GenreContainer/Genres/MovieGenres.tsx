import React, {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../../interfaces/movieInterface";
import MovieGenre from "../Genre/MovieGenre";
import css from "./MovieGenres.module.css"

interface IProps extends PropsWithChildren {
    genres: IGenre[]
}

const MovieGenres:FC<IProps> = ({genres}) => {

    return (
        <div id={css.genres}>
            {genres && genres.map((genre) => {
                return (
                    <div id={css.genre}>
                        <MovieGenre
                            key={genre.id}
                            genre={genre}
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default MovieGenres;