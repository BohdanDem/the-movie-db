import React, {FC, PropsWithChildren} from 'react';
// @ts-ignore
import StarRatings from "react-star-ratings"

interface IProps extends PropsWithChildren {
    vote_average: number
    starSpacing: string
    starDimension: string
}

const StarRating:FC<IProps> = ({vote_average, starSpacing, starDimension}) => {

    return (
        <StarRatings
            rating={vote_average}
            starRatedColor="rgb(222 230 34)"
            numberOfStars={10}
            name='rating'
            starDimension={starDimension}
            starSpacing={starSpacing}
        />
    );
};

export default StarRating;