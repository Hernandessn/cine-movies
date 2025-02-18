import styled from "styled-components";

export const Container = styled.div`
  min-height: 100px;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: ${props => props.$changeBackground ? '#000' : 'transparent'};
  transition: background-color 0.5s ease-in-out;

  img {
    width: 8%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
`;

export const Li = styled.li`
  display: flex;
  align-items: center; /* Alinha verticalmente o conteúdo */
  font-weight: 600;
  cursor: pointer;
  font-size: 18px;
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
  }

  &::before {
    content: '';
    height: 3px;
    width: ${(props) => (props.$Active ? '100%' : '0')};
    background-color: #189b20;
    position: absolute;
    bottom: -10px; /* Se necessário, ajuste esse valor para posicionar a linha de forma adequada */
    left: 0;
    transition: width 0.5s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }
`;

