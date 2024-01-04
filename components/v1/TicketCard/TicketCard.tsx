import React from 'react';
import { Container, Top, ImageContainer, Ticket, Left } from './styles';
import { Title, Info } from '@/components/v1/HomePage/CategoryEventCard/styles';
import { Button } from '@/ui/v1/Button/Button';
import { TTicket } from '@/domain/types/types';
import backgroundImage from '@/public/images/default-event-intro.jpg';
import { useTranslation } from "next-i18next";

export interface TicketCard {
    ticket: TTicket
}

const TicketCard: React.FC<TicketCard> = ({ ticket }) => {
    const { t: translate } = useTranslation('ticketsPage'); 

  return (
    <Container>
        <Top>
            <Title style={{ color: '#000' }}>{ticket.title}</Title>
            <Info style={{ color: '#000' }}>{ticket.date}</Info>
        </Top>
        <ImageContainer
            style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 23.44%, rgba(0, 0, 0, 0.80) 71.35%), url(${backgroundImage.src}), lightgray -0.403px -67.646px / 100% 199.94% no-repeat`,
                backgroundRepeat: 'no-repeat'
            }}>
        </ImageContainer>
        <Ticket>
            <Left>
                <Title style={{ color: '#000' }}>{ticket.count} {translate('Tickets Count')}</Title>
                <Info style={{ color: '#000' }}>{ticket.artist}</Info>
            </Left>
            <Button>{translate('Tickets')}</Button>
        </Ticket>
    </Container>
  )
}

export default TicketCard;
