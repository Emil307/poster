import styled from "styled-components";

export const Form = styled.div`
    width: fit-content;
    display: flex;
    gap: 16px;
    margin: 32px auto 56px;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
`;   

export const PhotoButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 190px;
    border-radius: 50%;
    background: var(--main-white);
`;

export const AddPhotoText = styled.p`
    font-size: 12px;

    color: var(--addable-dark-grey);
`;

export const Right = styled.div`
    width: 398px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 8px;
`;