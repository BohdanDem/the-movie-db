import React, {FC, PropsWithChildren} from 'react';
// @ts-ignore
import StarRatings from "react-star-ratings"

interface IProps extends PropsWithChildren {
    vote_average: number
}

const StarRating:FC<IProps> = ({vote_average}) => {

    return (
        <StarRatings
            rating={vote_average}
            starRatedColor="rgb(222 230 34)"
            numberOfStars={10}
            name='rating'
            starDimension="15px"
            starSpacing="1px"
        />
    );
};

export default StarRating;