import { useEffect, useState } from "react";
import { Container, Background } from "./styles";
import api from "../../services/api";

export function Modal({ movieId }) {
	const [movie, setMovie] = useState();
	
	
		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(()=>{
	async function getMovies() {
		const {
			data: { results },
		} = await api.get(`/movie/$${movieId}/videos`);
		
		setMovie(results[0]);
	}
	getMovies();
}, [])
	

	return (
		<Background>
			{movie &&(
		<Container>
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
