
//const baseURL = process.env.REACT_APP_API
const baseURL = 'https://api.themoviedb.org/3'
const posterURL = 'https://image.tmdb.org/t/p/w500'

const urls = {
    movies: '/discover/movie',
    movieDetails: '/movie/',
    credits: (id: number): string => `/movie/${id}/credits`,
    genres: '/genre/movie/list',
    search: '/search/movie'
}

export {
    baseURL,
    posterURL,
    urls
}