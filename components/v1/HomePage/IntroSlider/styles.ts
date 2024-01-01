import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1512px;
    margin: 45px auto 0;
    overflow-x: hidden;
    
    @media screen and (max-width: 768px) {
        margin: 0 auto;
    }
`;

export const Center = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1250px;
`;

const Slide = styled.button`
    position: relative;
    width: 293px;
    height: 377px;
    border-radius: 32px;
    text-align: left;
`;

const ExtremeSlide = styled(Slide)`
    position: absolute;
    top: 8px;
    z-index: -1;
    opacity: 0.5;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MainSlide = styled.div`
    position: relative;
    width: 600px;
    height: 410px;
    border-radius: 32px;
    margin-top: 54px;

    @media screen and (max-width: 768px) {
        width: 295px;
        height: 393px;
        margin-top: 16px;
    }
`;

export const PrevSlide = styled(Slide)`
    transform: rotate(-3deg);
    margin-top: 14px;
`;


export const NextSlide = styled(Slide)`
    transform: rotate(6deg);
    margin-top: 14px;
`;

export const LeftSlide = styled(ExtremeSlide)`
    right: -100px;
    transform: rotate(3deg);
`;

export const RightSlide = styled(ExtremeSlide)`
    left: -100px;
    transform: rotate(-3deg);
`;

export const Bg = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 32px;
`;

export const Button = styled.button`
    position: absolute;
    top: 24px;
    right: 24px;

    @media screen and (max-width: 768px) {
        right: 16px;
    }
`;

export const Bottom = styled.div`
    position: absolute;
    bottom: 24px;
    left: 24px;
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (max-width: 768px) {
        left: 16px;
        width: calc(100% - 32px);
    }
`;
