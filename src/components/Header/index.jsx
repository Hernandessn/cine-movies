import { Link, useLocation } from "react-router-dom";
import { Container, Menu, Li } from "./styles";
import Logo from '../../assets/logo.png';


export function Header() {
	const {pathname } = useLocation()


	
	



	return (
		<Container>
			<img src={Logo} alt="Logo-dev-movies" />
			<Menu>
				<Li $Active={pathname === '/'}>
					<Link to='/'>Home</Link>
				</Li>
				<Li $Active={pathname.includes('filmes')}>
					<Link to='/filmes'>Filmes</Link>
				</Li>
				<Li $Active={pathname.includes('series')}>
					<Link to='/series'>Séries</Link>
				</Li>
			</Menu>
		</Container>
	);
}
