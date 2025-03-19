import styled from "styled-components";

export const Title = styled.h4`
    color: #fff;
    font-size: 28px;
    font-weight: 700;

    /* Responsividade */
    @media (max-width: 768px) {
        font-size: 24px; /* Reduzir o tamanho da fonte em telas menores */
    }

    @media (max-width: 480px) {
        font-size: 20px; /* Ajuste para telas muito pequenas */
    }
`;

export const Container = styled.button`
    display: flex;
    margin-top: 30px;
    gap: 10px;
    background-color: #000;
    border: none;
    padding: 10px; /* Adicionando um pouco de padding para espaçamento */

    div {
        display: flex;
        flex-direction: column;
    }

    p {
        color: #fff;
        font-size: 18px; /* Tamanho padrão do texto */
    }

    img {
        height: 200px;
        width: auto; /* Garantir que a imagem seja proporcional */
    }

    /* Responsividade */
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center; /* Alinhar centralizado em telas menores */
        gap: 20px;

        img {
            height: 150px; /* Reduzir a altura da imagem */
        }

        p {
            font-size: 16px; /* Reduzir o tamanho da fonte em telas menores */
        }
    }

    @media (max-width: 480px) {
        img {
            height: 120px; /* Reduzir ainda mais para telas pequenas */
        }

        p {
            font-size: 14px; /* Ajustar o tamanho da fonte em telas muito pequenas */
        }
    }
`;
