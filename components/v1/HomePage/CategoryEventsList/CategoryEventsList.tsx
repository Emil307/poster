import React from 'react';
import Image from 'next/image';
import { events } from '@/data/events';
import CategoryEventCard from '@/components/v1/HomePage/CategoryEventCard/CategoryEventCard';
import { Container, Header, Info, EventsCount, Arrows, Events } from './styles';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './styles.module.scss';
import { useTranslation } from "next-i18next";

export interface EventsListProps {
  title: string
}

const CategoryEventsList: React.FC<EventsListProps> = ({ title }) => {    
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

    const { t: translate } = useTranslation('index'); 

  return (
    <Container>
        <Header>
            <Info>
                <h1>{title}</h1>
                <EventsCount>{events.length} {translate('events')}</EventsCount>
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
            <CategoryEventCard event={event} key={event.id}/>
          )}
        </Carousel>
    </Container>
  )
}

export default CategoryEventsList;
