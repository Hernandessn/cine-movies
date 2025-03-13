import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { Slider } from "../../components/Slider";
import {
	getMovies,
	getPopularSeries,
	getSeries,
	getTopMovies,
	getTopPeople,
	getTopSeries,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";
import { Background, Container, ContainerButton, Info, Poster } from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Series() {
	const [showModal, setShowModal] = useState(false);
	const [tv, setTv] = useState();
	const [topSeries, setTopSeries] = useState();
	const [popularSeries, setPopularSeries] = useState();


	const navigate = useNavigate();

	useEffect(() => {	

		async function getAllData() {
			Promise.all([
				getSeries(),
				getTopMovies(),
				getTopSeries(),
				getPopularSeries(),
				getTopPeople(),
			])
				.then(([series, topSeries, popularSeries]) => {
					setTv(series);
					setTopSeries(topSeries);
					setPopularSeries(popularSeries);
				})
				.catch((error) => console.error(error));
		}

		getAllData();
	}, []);

	return (
		<>
			{tv && (
				<Background img={getImages(tv.backdrop_path)}>
					{showModal && (
						<Modal movieId={tv.id} setShowModal={setShowModal} />
					)}
					<Container>
						<Info>
							<h1>{tv.title}</h1>
							<p>{tv.overview}</p>
							<ContainerButton>
								<Button
									onClick={() => navigate(`/detalhe/${tv.id}`)}
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
							<img alt="capa-do-filme" src={getImages(tv.poster_path)} />
						</Poster>
					</Container>
				</Background>
			)}

			
			{topSeries && <Slider info={topSeries} title={"Top Séries"} />}
			{popularSeries && (
				<Slider info={popularSeries} title={"Séries Populares"} />
			)}
		
		</>
	);
}
