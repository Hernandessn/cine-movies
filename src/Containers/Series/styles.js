import styled, { keyframes } from "styled-components";

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Background = styled.div`
    background-image: url( ${ (props)=> props.img} );
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }

    @media (max-width: 768px) {
        height: auto;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    max-width: 1500px;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
    }
`;

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 50%;

    h1 {
        font-size: 5rem;
        font-weight: 700;
        color: #ffff;
    }

    p {
        font-size: 20px;
        font-weight: 500;
        color: #ffff;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        width: 80%;
        text-align: center;
        h1 {
            font-size: 3rem;
        }
        p {
            font-size: 16px;
        }
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const Poster = styled.div`
    z-index: 4;

    img {
        width: 300px;
        border-radius: 30px;
        animation: ${scale} 0.5s linear;
    }

    @media (max-width: 768px) {
        img {
            width: 200px;
        }
    }
`;
