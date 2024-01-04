import styled from "styled-components";

export const Container = styled.button`
    text-align: left;
    width: 397px;
    height: 296px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px;
    border-radius: 32px 32px 16px 16px;
    transition: all .2s ease-in-out;

    &:hover {
        background: var(--hover-white);
    }

    @media screen and (max-width: 768px) {
        width: 343px;
        height: 292px;
    }
`;

export const TopImage = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 381px;
    height: 191px;
    border-radius: 24px;
    overflow: hidden;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 327px;
    }
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
