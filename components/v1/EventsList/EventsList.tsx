import React from 'react';
import type { TCard } from '@/domain/types/types';
import EventCard from '@/components/v1/EventCard/EventCard';
import { Container } from './styles';

export interface EventsListProps {
    events: TCard[];
}

const EventsList: React.FC<EventsListProps> = ({ events }) => {
  return (
    <Container>
        {events.map(event =>
            <EventCard event={event} key={event.id}/>
        )}
    </Container>
  )
}

export default EventsList;
