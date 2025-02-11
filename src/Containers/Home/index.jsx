import api from '../../services/api'


export function Home(){

    async function getMovies(){
        const data = await api.get('/movies/popular')

        console.log(data);
        
    }
getMovies()

    return(
        <>



        <h1>Home</h1>
        
        </>
    )
};