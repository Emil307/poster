import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 397px;
    height: 264px;
    border-radius: 24px;
    overflow: hidden;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 284px;
        height: 218px;
    }
`;

export const Bg = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 24px;
    -moz-transition: all .6s ease-out;
    -o-transition: all .6s ease-out;
    -webkit-transition: all .6s ease-out;

    &:hover {
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -o-transform: scale(1.2);
    }
`;

export const Top = styled.div`
    position: absolute;
    top: 16px;
    left: 16px;
    width: calc(100% - 32px);
    display: flex;
    justify-content: space-between;
`;

export const Tags = styled.div`
    display: flex;
    gap: 8px;

    & > * {
        display: flex;
        padding: 8px;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        background: var(--main-white);
    
        font-size: 12px;
    }
`;

export const Cost = styled.p`
    background: var(--main-yellow);

    font-weight: 700;
`;

export const Bottom = styled.div`
    position: absolute;
    bottom: 16px;
    left: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Title = styled.h3`
    font-family: Unbounded, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    color: var(--main-white);
`;

export const Info = styled.p`
    font-size: 12px;
    opacity: 0.7;
    color: var(--main-white);
`;
