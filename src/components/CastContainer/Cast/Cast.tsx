import React, {FC, PropsWithChildren} from 'react';
import {ICast} from "../../../interfaces/movieInterface";
import {posterURL} from "../../../constants/urls";
import css from '../Casts/Casts.module.css'

interface IProps extends PropsWithChildren {
    cast: ICast
}

const Cast:FC<IProps> = ({cast}) => {

    const {name, profile_path} = cast

    return (
        <div id={css.cast}>
            <img src={posterURL + profile_path} alt={name}/>
            {name}
        </div>)
}

export default Cast;