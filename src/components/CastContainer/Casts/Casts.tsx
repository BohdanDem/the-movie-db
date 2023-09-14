import React, {FC, PropsWithChildren} from 'react';
import {ICast} from "../../../interfaces/movieInterface";
import Cast from "../Cast/Cast";
import css from './Casts.module.css'

interface IProps extends PropsWithChildren {
    casts: ICast[]
}

const Casts:FC<IProps> = ({casts}) => {
    return (
        <div id={css.wrapper}>
            {casts && casts.map((cast) => {
                return (
                    <Cast
                        key={cast.id}
                        cast={cast}
                    />
                )
            })}
        </div>
    );
};

export default Casts;