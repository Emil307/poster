import React from 'react';
import Image from 'next/image';
import type { TEvent } from '@/domain/types/types';
import { Container, Bg, Top, Tags, Cost, Bottom, Title, Info } from './styles';
import backgroundImage from '@/public/images/default-event-intro.jpg';

export interface EventCardProps {
 event: TEvent;
}

const CategoryEventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Container>
      <Bg
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 23.44%, rgba(0, 0, 0, 0.80) 71.35%), url(${backgroundImage.src}), lightgray -0.403px -67.646px / 100% 199.94% no-repeat`,
          backgroundRepeat: 'no-repeat'
        }}>
      </Bg>
      <Top>
        <Tags>
          <Cost>{event.cost}</Cost>
          <p>{event.startAge}</p>
        </Tags>
        <Image src="/icons/heart.svg" alt="like" width={24} height={24} priority={true} />
      </Top>
      <Bottom>
        <Title>{event.title}</Title>
        <Info>{event.date} • {event.artist}</Info>
      </Bottom>
    </Container>
  )
}

export default CategoryEventCard;
