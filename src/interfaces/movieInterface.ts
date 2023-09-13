
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

interface IGenre {
    id: number,
    name: string
}