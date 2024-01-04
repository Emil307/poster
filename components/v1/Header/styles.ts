import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-width: 320px;
    height: 68px;
    border-radius: 0 0 32px 32px;

    background-color: var(--main-white);
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1224px;
    padding: 0 16px;

    @media screen and (max-width: 768px) {
        max-width: 375px;
    }
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
`
