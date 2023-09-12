import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constants/urls";

type IRes<T> = Promise<AxiosResponse<T>>

const apiService = axios.create({baseURL})

const access: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjQyM2Q4ODcyM2VkMWQyODc2NjliMzdhMmZiZTEyNCIsInN1YiI6IjY0YzI2MDJkMTNhMzIwMDBmZmJmNDU1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w8Yn8RofgSqB6DVnlJF1FlnKgBjelvEeiddf2DaN-vo'

apiService.interceptors.request.use(req => {
    if (access) {
        req.headers.Authorization = `Bearer ${access}`
    }
    return req
})

export type {
    IRes
}

export {
    apiService
}