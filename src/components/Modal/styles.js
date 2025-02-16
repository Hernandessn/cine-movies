import styled from "styled-components";


export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background-color: rgba(0,0,0,0.7);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Container = styled.div`
    background-color: #000;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 50px;
    max-width: 1200px;


    iframe{
      border: none;
      
    }
`;


export const Button = styled.button`
border: 3px solid #ffff;
background: transparent;
color: #ffff;
border-radius: 30px;
padding: 10px 20px;
cursor: pointer;
font-size: 20px;
font-weight: 500;
position: absolute;
top: 0;
right: 50;
z-index: 9999;



`