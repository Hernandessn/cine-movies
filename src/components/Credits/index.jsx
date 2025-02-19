import { Container, Title } from "./styles";
import { getImages } from '../../utils/getImages';
export function Credits({ credits }) {

	
	return (
		<>
		<Title>Créditos</Title>
		{credits && ( 
		<Container>
			{credits.slice(0, 5).map( artist => (
				<div key={artist.id}>
					<img src={getImages(artist.profile_path)} alt={artist.original_name} />
					<p>{artist.original_name}</p>
				</div>
			))}
			
		</Container>	
		)}
		
		</>
	
	);
}
