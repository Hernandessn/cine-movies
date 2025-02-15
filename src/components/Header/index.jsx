import { Link } from "react-router-dom";
import { Container, Menu, Li } from "./styles";
import Logo from '../../assets/logo.png';


export function Header() {
	return (
		<Container>
			<img src={Logo} alt="Logo-dev-movies" />
			<Menu>
				<Li>
					<Link to='/'>Home</Link>
				</Li>
				<Li>
					<Link to='/filmes'>Filmes</Link>
				</Li>
				<Li>
					<Link to='/series'>Séries</Link>
				</Li>
			</Menu>
		</Container>
	);
}
