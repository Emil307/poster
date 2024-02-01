import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 398px;
    margin: 32px auto 56px;

    @media screen and (max-width: 768px) {
        width: 343px;
        margin: 24px auto 56px;
    }
`;

export const ButtonWrapper = styled.div`
    margin-top: 8px;
`;
