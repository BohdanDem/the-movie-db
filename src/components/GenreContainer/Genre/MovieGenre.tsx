import React, {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../../interfaces/movieInterface";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const MovieGenre:FC<IProps> = ({genre}) => {

    return (
        <div>
            {genre.name}
        </div>
    );
};

export default MovieGenre;