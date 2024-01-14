import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1224px;
    height: fit-content; 
    margin: 64px auto 0;
    display: flex;
    flex-direction: column;
    gap: 36px;
    overflow: hidden;
    padding-left: 16px;

    @media screen and (max-width: 768px) {
        margin: 32px auto 0;
        gap: 16px;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Info = styled.div`
    display: flex;
    gap: 16px;
    align-items: flex-end;
    

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
    }
`;

export const Arrows = styled.div`
    display: flex;
    gap: 8px;

    & > * {
        cursor: pointer;
    }
`;

export const EventsCount = styled.span`
    font-family: Unbounded;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.3;

    color: var(--main-black, #000);
`;

export const Events = styled.div`
    display: flex;
    gap: 16px;
`;
