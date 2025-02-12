import api from '../../services/api';
import { Background } from './styles';
import { useState } from 'react';

export function Home(){

    const [movie, setMovie] = useState;

    async function getMovies(){
        const data = await api.get('/movies/popular')

        setMovie(data)
        console.log(data);
        
    }
getMovies()

    return(
     <Background 
     img="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg">

        <h1>home</h1>
     </Background>
    )
};
