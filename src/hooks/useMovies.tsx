import { useEffect, useState } from "react";
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterfaces';

export const useMovies = () => {

    const [ isLoading, setIsLoagind ] = useState(true);
    const [ peliculasEnCine, setPeliculasEnCine ] = useState<Movie[]>([]);

    const getMovies = async () => {   
        const resp = await movieDB.get<MovieDBNowPlaying>('now_playing');
        setPeliculasEnCine(resp.data.results);
        setIsLoagind(false);
    }

    useEffect(() => {
        // Now_playing
        getMovies();
    }, [])

    return {
        isLoading,
        peliculasEnCine
    }
}
