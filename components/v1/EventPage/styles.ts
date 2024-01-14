import styled from "styled-components";

export const Intro = styled.section`
    height: 648px;
    padding: 270px 16px 0;

    @media screen and (max-width: 768px) {
        padding: 316px 16px 0;
    }
`;

export const Offer = styled.div`
    width: 100%;
    max-width: 1224px;
    margin: 0 auto;
`;

export const Tags = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const Title = styled.h1`
    margin-top: 40px;
    font-weight: 400;
    color: #fff;

    @media screen and (max-width: 768px) {
        margin-top: 32px;
        font-size: 16px;
    }
`;

export const SubTitle = styled.h2`
    margin-top: 8px;
    text-align: left;
    font-family: "WixMadeforDisplay", sans-serif;
    text-align: left;
    font-weight: 400;
    opacity: 0.7;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Buttons = styled.div`
    width: 284px;
    display: flex;
    align-items: center;
    gap: 16px; 
    margin-top: 32px;
`;

export const FavoriteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--main-white);

    @media screen and (max-width: 768px) {
        min-width: 48px;
        height: 48px;
    }
`;

export const BottomWhiteBg = styled.div`
    position: absolute;
    top: 612px;
    left: 0;
    width: 100%;
    height: 40px;
    border-radius: 32px 32px 0 0;
    background: var(--bg-white);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 88px;
    width: 100%;
    padding: 0 16px;
    max-width: 944px;
    margin-left: calc((100% - 1224px) / 2);

    @media screen and (max-width: 1224px) {
        width: 375px;
        margin-left: 0;
    }
`;

export const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 23px;
`;

export const ScheduleSection = styled.section``;

export const ScheduleItem = styled.div`
    margin-top: 16px;
    display: flex;
    gap: 16px;

    @media screen and (max-width: 768px) {
        gap: 8px;
    }
`;

export const EventDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 102px;
    padding: 8px 24px;
    border-radius: 16px;
    background: var(--main-white); 

    @media screen and (max-width: 768px) {
        height: 102px;
        padding: 8px 16px;
    }
`;

export const Ticket = styled.div`
    width: 100%;
    height: 112px;
    display: flex;
    justify-content: space-between;
    padding: 16px 24px;
    border-radius: 16px;
    background: var(--main-white); 

    @media screen and (max-width: 768px) {
        height: 182px;
        padding: 16px;
        flex-direction: column;
    }
`;

export const TicketInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Place = styled.p`
    font-size: 24px;
`;

export const TicketBuy = styled.div`
    width: 233px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Cost = styled.p`
    text-align: center;
    font-family: "Unbounded", sans-serif;
    font-size: 24px;

    @media screen and (max-width: 768px) {
        text-align: left;
        font-size: 16px;
    }
`;

export const DetailsSection = styled.section`
    margin-bottom: 112px;
`;

export const Details = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 16px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 24px;
    border-radius: 16px;
    background: var(--main-white); 

    @media screen and (max-width: 768px) {
        width: 100%;
        gap: 4px;
    }
`;

export const MapSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: 1224px;
    margin: 104px auto 192px;
    padding: 0 16px;

    @media screen and (max-width: 768px) {
        margin: 64px auto 22px;
        gap: 24px;
    }
`;

export const MapHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 24px;
    }
`;

export const MapTitle = styled.h2`
    text-align: left;
`;

export const MapInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const MapAbout = styled.div`
    display: flex;
    gap: 24px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 8px;
    }
`;

export const Right = styled.div`
    width: 203px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Map = styled.iframe`
    width: 100%;
    height: 248px;
    border-radius: 16px;
    border: 1px solid var(--click-white);
`;
