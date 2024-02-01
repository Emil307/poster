import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1224px;
    margin: 68px auto 0;
    padding-top: 16px;

    @media screen and (max-width: 768px) {
        max-width: 343px;
    }
`;

export const Content = styled.div`
    margin-top: 40px;
    justify-content: flex-start;
`;

export const AlertTitle = styled.h2`
    text-align: left;
    margin-bottom: 8px;
`;

export const ButtonWrapper = styled.div`
    width: 181px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
