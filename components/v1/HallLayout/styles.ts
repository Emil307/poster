import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1224px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;   
    padding: 24px;
    border-radius: 32px;
    background: var(--addable-grey);
    margin-top: 16px;
`;

export const HallContainer = styled.div`
    position: relative;
    display: flex;
    height: 512px; 
    gap: 8px;
    margin-top: 8px;
`; 

export const Tickets = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border-radius: 24px;
    background: var(--addable-grey);
`;

export const Ticket = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 12px;
    border-radius: 32px;
    background: var(--main-white);
`;

export const ZoneColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
`;

export const Hall = styled.div`
    width: 100%;
    max-width: calc(100% - 150px - 8px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 32px;
    background: var(--addable-grey);
    overflow: auto;
    padding: 16px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Schema = styled.div``;

export const Scene = styled.div``;

export const Places = styled.div`
    display: flex;
    width: 790px;
    height: 260px;
    gap: 48px;
    margin-top: 16px;
    padding: 12px;
    border-radius: 24px;
    background: var(--main-white);
`;

export const Zone = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(8, 1fr);
`;

export const Buttons = styled.button`
    position: absolute;
    top: calc(50% - 56px - 8px);
    right: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Button = styled.button`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--main-white);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;
