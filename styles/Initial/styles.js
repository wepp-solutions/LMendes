import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 200px auto;
  display: flex;
  gap: 90px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Texts = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  text-align: left;
  justify-content: center;

  p:nth-child(1) {
    font-size: clamp(1.7rem, 5vw, 2.3rem);
    letter-spacing: -1px;
  }
  p:nth-child(2) {
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    letter-spacing: -1px;
    font-weight: 300;
  }

  div {
    display: flex;
    gap: 5px;
    margin-top: 20px;
  }
`;
export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  ${(props) =>
    props.circle &&
    css`
      width: 200px;
      height: 200px;
      .img {
        border-radius: 100px;
      }
    `}
  ${(props) =>
    props.intro &&
    css`
      height: 400px;
    `}
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;

  ${(props) =>
    props.intro &&
    css`
      justify-content: center;
      gap: 80px;
    `}

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  align-items: center;
  justify-content: center;

  div {
    p:nth-child(1) {
      font-size: clamp(1.4rem, 5vw, 1.5rem);
      font-weight: 600;
    }
    p:nth-child(2) {
      font-size: clamp(1rem, 5vw, 1.2rem);
      font-weight: 300;
      max-width: 500px;
    }
  }
`;
export const Intro = styled.div`
  p:nth-child(1) {
    font-size: clamp(1.4rem, 5vw, 1.5rem);
    font-weight: 900;
  }
  p:nth-child(2) {
    font-size: clamp(1rem, 5vw, 1.2rem);
    font-weight: 300;
    max-width: 500px;
  }
`;
