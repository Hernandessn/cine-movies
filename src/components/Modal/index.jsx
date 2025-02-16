import { useEffect, useState } from "react";
import { Container, Background, Button } from "./styles";
import { getMovie } from "../../services/getData";

export function Modal({ movieId,  setShowModal }) {
	const [movie, setMovie] = useState();
	
	
// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>		
	useEffect(()=>{
	async function getMovies() {
	setMovie(await getMovie(movieId))
	}
	getMovies()
}, [])
	

	return (
		<Background onClick={()=> setShowModal(false)}>
			{movie &&(
		<Container>
			<Button onClick={()=>setShowModal(false)}> X </Button>
			<iframe
			 src={`https://www.youtube.com/embed/${movieId}`}
			 title="Youtube Video Player"
			 height="500px"
			 width="100%"
			> </iframe>
		</Container>
	)}
		</Background>
		
	);
}
