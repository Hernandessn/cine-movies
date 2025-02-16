import styled from "styled-components";


export const Container = styled.div`
    min-height: 100px;
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px ;
    width: 100%;
    background-color: ${(props)=>props.changeBackground ? '#000' : 'transparent'};
    transition: background-color 0ms.5 ease-in-out;
    
    img{
        width: 10%;

    }
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
`;

export const Li = styled.li`
    font-weight: 600;
    cursor: pointer;
    font-size: 18px;
    position: relative;

    a{
        text-decoration: none;
        color: #fff;
    }

    &::before{
        content: '';
        height: 3px;
        width: ${(props)=> props.$Active ? '100%' : 0};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        left: 0;
        transition: width 0.5s ease-in-out;
    }

    &:hover::after{
        width: 100%;
    }
`;


