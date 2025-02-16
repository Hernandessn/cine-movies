import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
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
		<Container>
			<div>Detail</div>
		</Container>
	);
}
