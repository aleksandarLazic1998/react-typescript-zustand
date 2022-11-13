import axios from 'axios'

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_REACT_API_URL,
})

httpClient.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers['X-RapidAPI-Key'] = import.meta.env.VITE_API_KEY
        config.headers['X-RapidAPI-Host'] = import.meta.env.VITE_API_HOST
    }
    return config
})

httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.status === 401) window.location.replace('/')
        else throw error
    }
)

export default httpClient
