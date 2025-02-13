import { Button } from "../../components/Button";
import api from "../../services/api";
import { Background, Container, Info, Poster } from "./styles";
import { useEffect, useState } from "react";

export function Home() {
	const [movie, setMovie] = useState();

	useEffect(() => {
		async function getMovies() {
			const {
				data: { results },
			} = await api.get("/movie/popular");

			setMovie(results[1]);
		}
		getMovies();
	}, []);

	return (
		<>
			{movie && (
				<Background
					img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
				>
					<Container>
						<Info>
							<h1>{movie.title}</h1>
							<p>{movie.overview}</p>
							<div>
								<Button>Assista Agora</Button>
								<Button>Assista o Trailer</Button>
							</div>
						</Info>

						<Poster>
							<img
								alt="capa-do-filme"
								src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
							/>
						</Poster>
					</Container>
				</Background>
			)}
		</>
	);
}
