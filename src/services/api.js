const API_KEY = import.meta.env.VITE_API_KEY;

console.log(API_KEY); // Isso vai imprimir "sua_chave_api_aqui" no console

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3', // Apenas o domínio e o caminho base
    params: {
        api_key: API_KEY, // Chave da API
        language: 'pt-BR', // Idioma
        page: 1 // Página
    }
});

export default api;