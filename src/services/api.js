import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '885d3aa4e9a12f85cf084658711ea32d',
        language: 'pt-BR',
        page: 1
    }
});

export default api;