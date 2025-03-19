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
  background-image: url(${(props) => props.$image});
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 768px) {
    height: 40vh;
  }

  @media (max-width: 480px) {
    height: 30vh;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));

    @media (max-width: 768px) {
      height: 80px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin: -100px auto 0;
  background-color: black;
  padding: 0 20px;

  @media (max-width: 1024px) {
    margin-top: -80px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: -60px;
  }
`;

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;

  @media (max-width: 768px) {
    padding: 10px;
    justify-content: center;
  }

  img {
    width: 300px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 29px 8px;
    animation: ${scale} 0.5s linear;

    @media (max-width: 1024px) {
      width: 250px;
    }

    @media (max-width: 768px) {
      width: 200px;
    }

    @media (max-width: 480px) {
      width: 180px;
      border-radius: 20px;
    }
  }
`;

export const Info = styled.div`
    padding: 20px;
    width: 50%;
    z-index: 99;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 100%;
      padding: 10px;
      align-items: center;
      text-align: center;
    }

    h2 {
        font-size: 50px;
        font-weight: 700;
        color: #ffffff;

        @media (max-width: 1024px) {
          font-size: 40px;
        }

        @media (max-width: 768px) {
          font-size: 32px;
        }

        @media (max-width: 480px) {
          font-size: 24px;
        }
    }

    p {
        font-weight: 700;
        color: #fff;
        margin-top: 20px;
        margin-bottom: 30px;

        @media (max-width: 768px) {
          margin-top: 15px;
          margin-bottom: 20px;
        }

        @media (max-width: 480px) {
          font-size: 14px;
          margin-top: 10px;
          margin-bottom: 15px;
        }
    }
`;

export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  background-color: #000;
  border: none;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 50px 0;

    @media (max-width: 768px) {
      margin: 30px 0;
    }

    @media (max-width: 480px) {
      margin: 20px 0;
    }
  }

  h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  iframe {
    border: none;
    width: 100%;
    height: 500px;

    @media (max-width: 1024px) {
      height: 450px;
    }

    @media (max-width: 768px) {
      height: 350px;
    }

    @media (max-width: 480px) {
      height: 250px;
    }
  }
`;