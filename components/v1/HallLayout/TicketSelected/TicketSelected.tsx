import React from 'react';
import { Container } from './styles';
import type { TPlace } from '@/domain/types/types';
import selectedPlacesState from '@/store/selectedPlacesState';

export interface TicketSelectedProps {
    ticket: TPlace;
}

const TicketSelected: React.FC<TicketSelectedProps> = ({ ticket }) => {
  return (
    <>
        <Container>
            <p>{ticket.row} ряд, {ticket.column} место</p>
            <p>{ticket.cost} Р</p>
        </Container>
    </>
  )
}

export default TicketSelected;
