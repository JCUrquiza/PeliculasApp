import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '924b1a3e3b773a17fe5a720ebe16c0a2',
        language: 'es-ES'
    }
});

export default movieDB;


