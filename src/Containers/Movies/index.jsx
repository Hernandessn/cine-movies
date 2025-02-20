import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { Slider } from "../../components/Slider";
import api from "../../services/api";
import {
	getMovies,
	getTopMovies,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";
import { Background, Container, ContainerButton, Info, Poster } from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Movies() {
	const [showModal, setShowModal] = useState(false);
	const [movie, setMovie] = useState();
	const [topMovies, setTopMovies] = useState();
	


	const navigate = useNavigate();

	useEffect(() => {
		async function getAllData() {
			try {
				const {
					data: { results },
				} = await api.get("/movie/popular");
	
				setMovie(results[2]); // Define o filme principal
	
				const topMoviesData = await getTopMovies(); // Pega os filmes do slide
				setTopMovies(topMoviesData); // Define os filmes do slider
			} catch (error) {
				console.error("Erro ao buscar os filmes:", error);
			}
		}
	
		getAllData();
	}, []);
	

	return (
		<>
			{movie && (
				<Background img={getImages(movie.backdrop_path)}>
					{showModal && (
						<Modal movieId={movie.id} setShowModal={setShowModal} />
					)}
					<Container>
						<Info>
							<h1>{movie.title}</h1>
							<p>{movie.overview}</p>
							<ContainerButton>
								<Button
									onClick={() => navigate(`/detalhe/${movie.id}`)}
									red={true}
								>
									Assista Agora
								</Button>
								<Button red={false} onClick={() => setShowModal(true)}>
									Assista o Trailer
								</Button>
							</ContainerButton>
						</Info>

						<Poster>
							<img alt="capa-do-filme" src={getImages(movie.poster_path)} />
						</Poster>
					</Container>
				</Background>
			)}

			{topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
		
		</>
	);
}
