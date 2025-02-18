import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Background, Container, Cover } from "./styles";
import { getImages } from '../../utils/getImages';
import {
	getMovieById,
	getMovieCredits,
	getMovieSimilar,
	getMovieVideos,
} from "../../services/getData";

export function Detail() {
	const { id } = useParams()
	const [movie, setMovie] = useState();
	const [movieVideo, setMovieVideo] = useState();
	const [movieCredits, setMovieCredits] = useState();
	const [movieSimilar, setMovieSimilar] = useState();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		async function getAllData() {
			Promise.all([
				getMovieById(id),
				getMovieVideos(),
				getMovieCredits(),
				getMovieSimilar(),
			])
				.then(([movie, videos, credits, similar]) => {
					setMovie(movie);
					setMovieVideo(videos);
					setMovieCredits(credits);
					setMovieSimilar(similar);
				})
				.catch((error) => console.error(error));
		}

		getAllData();
	}, []);
	return (
		<>
		{movie && (
			<>
			<Background image={getImages(movie.backdrop_path)}/>
		<Container>
			<Cover>
				<img src={getImages(movie.poster_path)} alt="" />
			</Cover>
			<div>Detail</div>
		</Container>
		</>
	)}
		</>
	);
}
