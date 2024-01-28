import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1224px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        max-width: 343px;
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

    @media screen and (max-width: 768px) {
        flex-direction: column; 
    }
`;  

export const TicketsCost = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border-radius: 24px;
    background: var(--addable-grey);

    @media screen and (max-width: 768px) {
        flex-direction: row;
        overflow: auto;
    }
`;

export const TicketCost = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 12px;
    border-radius: 32px;
    background: var(--main-white);
    white-space: nowrap;
`;

export const ZoneColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
`;

export const Hall = styled.div`
    position: relative;
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

    @media screen and (max-width: 768px) {
        max-width: 343px;
        height: 460px;
    }
`;

export const Schema = styled.div`
    @media screen and (max-width: 768px) {
        max-width: 343px;
    }
`;

export const Scene = styled.div``;

export const Places = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    padding: 12px;
    border-radius: 24px;
    background: var(--main-white);
    width: 776px;
`;

export const Zone = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 32px);
    grid-template-rows: repeat(8, 32px);
`;

export const SelectedTicketsContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: calc(100% - 150px - 8px);
    height: 107px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    background: var(--main-white);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 32px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
        width : 100%;
        border-radius: 16px;
        padding: 0 20px;
        overflow: auto;
        height: 180px;
    }
`;

export const SelectedTickets = styled.div`
    display: flex;
    width: fit-content;
    height: 107px;
    max-content: calc(100% - 24px);
    flex-wrap: wrap;
    gap: 24px;
    overflow: auto;
    padding: 20px 0;

    @media screen and (max-width: 768px) {
        flex-wrap: no-wrap;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        height: 86px;
        padding: 16px 0;
    }
`;

export const SelectedTicketsRigth = styled.div`
    width: 264px;
    display: flex;
    align-items: center;
    gap: 24px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;


export const SelectedTicketsInfo = styled.div`
    width: 190px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const SelectedTicketsCost = styled.h3`
    font-size: 20px;
`;

export const Buttons = styled.button`
    position: absolute;
    top: calc(50% - 56px - 8px);
    right: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (max-width: 768px) {
        top: calc(50% - 56px - 8px);
    }
`;

export const HallButton = styled.button`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--main-white);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;
