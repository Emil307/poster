import React from 'react'
import type { TEvent } from '@/domain/types/types';
import { Bg, Top, Tags, Cost, Title, Info } from '@/components/v1/HomePage/CategoryEventCard/styles';
import { Container, TopImage, Bottom } from './styles';
import Image from 'next/image';
import backgroundImage from '@/public/images/default-event-intro.jpg';

export interface EventCardProps {
    event: TEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Container>
        <TopImage>
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
        </TopImage>
        <Bottom>
            <Title style={{ color: '#000' }}>{event.title}</Title>
            <Info style={{ color: '#000' }}>{event.date} • {event.artist}</Info>
        </Bottom>
    </Container>
  )
}

export default EventCard;
