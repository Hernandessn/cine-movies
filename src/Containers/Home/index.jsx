import { Button } from "../../components/Button";
import { Slider } from "../../components/Slider";
import api from "../../services/api";
import { getImages } from "../../utils/getImages";
import { Background, Container, ContainerButton, Info, Poster } from "./styles";
import { useEffect, useState } from "react";

export function Home() {
	const [movie, setMovie] = useState();
	const [topMovies, setTopMovies] = useState();

	useEffect(() => {
		async function getMovies() {
			const {
				data: { results },
			} = await api.get("/movie/popular");

			setMovie(results[1]);
		}
	

		async function getTopMovies() {
			const {
				data: { results },
			} = await api.get("/movie/top_rated");

			
			console.log(results);
			
			setTopMovies(results);
		}


		getMovies();
		getTopMovies();
	}, []);

	return (
		<>
			{movie && (
				<Background
					img={getImages(movie.backdrop_path)}
				>
					<Container>
						<Info>
							<h1>{movie.title}</h1>
							<p>{movie.overview}</p>
							<ContainerButton>
								<Button red={true}>Assista Agora</Button>
								<Button red={false}>Assista o Trailer</Button>
							</ContainerButton>
						</Info>

						<Poster>
							<img
								alt="capa-do-filme"
								src={getImages(movie.poster_path)}
							/>
						</Poster>
					</Container>
				</Background>
			)}

		{topMovies && <Slider info={topMovies} title={'Top Filmes'}/>}
		</>
	);
}
