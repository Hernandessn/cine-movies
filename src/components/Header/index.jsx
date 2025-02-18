import { Link, useLocation } from "react-router-dom";
import { Container, Menu, Li } from "./styles";
import Logo from '../../assets/logo.png';
import { useEffect, useState } from "react";

export function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setChangeBackground(window.pageYOffset > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container $changeBackground={changeBackground}>
      <img src={Logo} alt="Logo-dev-movies" />
      <Menu>
        <Li $Active={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        <Li $Active={pathname.includes('filmes')}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li $Active={pathname.includes('series')}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
}
