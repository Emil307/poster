import React from 'react';
import Image from 'next/image';
import { Container, Bg, Top, Limits, Cost, Bottom, Title, Info } from './styles';
import backgroundImage from '@/public/images/default-event-intro.jpg';

export type TCard = {
  id: number,
  title: string,
  date: string,
  artist: string,
  cost: string,
  startAge: string,
  introImage: string,
}

export interface EventCardProps {
 event: TCard;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Container>
      <Bg
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 23.44%, rgba(0, 0, 0, 0.80) 71.35%), url(${backgroundImage.src}), lightgray -0.403px -67.646px / 100% 199.94% no-repeat`,
          backgroundRepeat: 'no-repeat'
        }}>
      </Bg>
      <Top>
        <Limits>
          <Cost>{event.cost}</Cost>
          <p>{event.startAge}</p>
        </Limits>
        <Image src="/icons/heart.svg" alt="like" width={24} height={24} priority={true} />
      </Top>
      <Bottom>
        <Title>{event.title}</Title>
        <Info>{event.date} • {event.artist}</Info>
      </Bottom>
    </Container>
  )
}

export default EventCard;