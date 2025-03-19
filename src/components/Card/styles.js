import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 30px;
        width: 300px;
        height: auto; /* Garantir que a altura seja proporcional */
    }

    h3 {
        color: #ffff;
        margin-top: 15px;
    }

    /* Responsividade */
    @media (max-width: 768px) {
        img {
            width: 250px; /* Reduzir o tamanho da imagem */
        }

        h3 {
            font-size: 18px; /* Ajuste no tamanho da fonte do título */
        }
    }

    @media (max-width: 480px) {
        img {
            width: 200px; /* Reduzir ainda mais para telas menores */
        }

        h3 {
            font-size: 16px; /* Ajuste no tamanho da fonte do título para telas muito pequenas */
        }
    }
`;
