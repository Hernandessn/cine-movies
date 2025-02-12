import api from '../../services/api';
import { Background } from './styles';
import { useEffect, useState } from 'react';

export function Home(){

    const [movie, setMovie] = useState();

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(()=>{
        async function getMovies(){
            const{ 
                data: { results} 
            } = await api.get('/movies/popular')
    
            setMovie(results[1]);
            
        }
        getMovies()
    },[])

    


    return(
        <>
        { movie && ( 
     <Background 
     img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
     </Background>
     )}
        </>
    
    )
};
