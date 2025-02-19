import styled from "styled-components";


export const Title = styled.h4`
    color: #fff;
    font-size: 28px;
    font-weight: 700;
`;

export const Container = styled.button`
    display: flex;
    margin-top: 30px;
    gap: 10px;
    background-color: #000;
    border: none;
    
    div{
        display: flex;
        flex-direction: column;
    }

    p{
        color: #fff;
    }
    img{
        height: 200px;
    }
`;



