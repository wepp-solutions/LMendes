import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
`;
export const Header = styled.div`
    position: relative;
    width: 100%;
    height: 450px;

    .img {
        filter: brightness(60%);
    }
`
export const WrapperContent = styled.div`
    margin: 50px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;

    @media (max-width: 850px) {
        flex-direction: column;
    }
`
export const Cards = styled.div`
    p:nth-child(1) {
        font-size: clamp(1.5rem, 5vw, 1.7rem);
        font-weight: 700;
    }
    width: min(600px, 100%);
`
export const TextsHeader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 90%;

    h1 {
        font-size: clamp(2rem, 5vw, 3rem);
    }
    p {
        font-size: clamp(1rem, 5vw, 1.2rem);
        max-width: 700px;
    }
`
export const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    margin: 20px 0;
`