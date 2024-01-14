import React from 'react';
import Link from 'next/link';
import type { TEvent } from '@/domain/types/types';
import EventCard from '@/components/v1/EventCard/EventCard';
import { Container } from './styles';

export interface EventsListProps {
    events: TEvent[];
}

const EventsList: React.FC<EventsListProps> = ({ events }) => {
  return (
    <Link href='/event/[id]'>
      <Container>
          {events.map(event =>
              <EventCard event={event} key={event.id}/>
          )}
      </Container>
    </Link>
  )
}

export default EventsList;
