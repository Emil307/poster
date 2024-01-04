import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 397px;

    @media screen and (max-width: 768px) {
        width: 343px;
    }
`;

const Div = styled.div`
    display: flex;
    padding: 16px;
    border-radius: 24px;
    background: var(--main-white);
`;

export const Top = styled(Div)`
    flex-direction: column;
    gap: 8px;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 191px;
    border-radius: 24px;
`;

export const Ticket = styled(Div)`
    align-items: flex-end;
`;

export const Left = styled.div`
    min-width: 200px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
