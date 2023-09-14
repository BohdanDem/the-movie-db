
export interface IMovie {
    id: number,
    title: string,
    poster_path: string,
    vote_average: number,
}

export interface IMovieDetails {
    poster_path: string,
    title: string,
    overview: string,
    vote_average: number,
    genres: IGenre[],
    release_date: string,
    runtime: number
}

export interface IGenre {
    id: number,
    name: string
}

export interface IMovieCast {
    id: number,
    cast: ICast[]
}

export interface ICast {
    id: number,
    name: string,
    profile_path: string
}