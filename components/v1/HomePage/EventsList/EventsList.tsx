import React from 'react';
import Image from 'next/image';
import { events } from '@/data/events';
import EventCard from '@/components/v1/HomePage/EventCard/EventCard';
import { Container, Header, Info, EventsCount, Arrows, Events } from './styles';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './styles.module.scss';

export interface EventsListProps {
  title: string
}

const EventsList: React.FC<EventsListProps> = ({ title }) => {    
    const responsive = {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 768
        },
        items: 3,
        partialVisibilityGutter: 0
      },
      mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    };

  return (
    <Container>
        <Header>
            <Info>
                <h1>{title}</h1>
                <EventsCount>{events.length} событие</EventsCount>
            </Info>
            {/* <Arrows>
                <Image src="/icons/arrow-left.svg" alt="left" width={24} height={24} priority={true} />
                <Image src="/icons/arrow-right.svg" alt="right" width={24} height={24} priority={true} />
            </Arrows> */}
        </Header>
        <Carousel 
          responsive={responsive}
          ssr
          infinite
          containerClass={styles.carousel}
          draggable={false}
        >
          {events.map(event =>
            <EventCard event={event} key={event.id}/>
          )}
        </Carousel>
    </Container>
  )
}

export default EventsList;
