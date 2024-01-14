import React, { useState } from 'react';
import Image from 'next/image';
import { TEvent } from '@/domain/types/types';
import { useRouter } from 'next/router';
import { events } from '@/data/events';
import HallLayout from '@/components/v1/HallLayout/HallLayout';
import CategoryEventsList from '@/components/v1/CategoryEventsList/CategoryEventsList';
import { 
  Intro,
  Offer,
  Tags,
  Title,
  SubTitle,
  Buttons,
  FavoriteButton,
  BottomWhiteBg,
  Container,
  AboutSection,
  ScheduleSection,
  ScheduleItem,
  EventDate,
  Ticket,
  TicketInfo,
  Place,
  TicketBuy,
  Cost,
  DetailsSection,
  Details,
  Detail,
  MapSection,
  MapHeader,
  MapTitle,
  MapInfo,
  MapAbout,
  Right,
  Map
} from './styles';
import { Button } from '@/ui/v1/Button/Button';
import backgroundImage from '@/public/images/default-event.jpg';
import Support from '@/components/v1/Support/Support';

export interface EventPageProps {
  event: TEvent;
}

export const EventPage: React.FC<EventPageProps> = () => {
  const router = useRouter();
  const { id } = router.query;
  const event = events[Number(id)];

  return (
    <div>
      <Intro
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <Offer>
          <Tags></Tags>
          <Title>NIF23 - THE LOVE OF DON PERLIMPLÍN AND BELISA IN THE GARDEN by Federico García Lorca</Title>
          <SubTitle>November 14 • ETKO HANGAR</SubTitle>
          <Buttons>
            <Button>To buy tickets</Button>
            <FavoriteButton>
              <Image src='/icons/favorites-black.svg' alt='add to favorites' width={24} height={24} priority={true}/>
            </FavoriteButton>
          </Buttons>
        </Offer>
        <BottomWhiteBg>

        </BottomWhiteBg>
      </Intro>
      <Container>
        <AboutSection>
          <h2 style={{ textAlign: 'left' }}>About the event</h2>
          <p>
            A classical music concert performed by two young musicians. They will perform such familiar hits as “On the Titanic”, “Loneliness”, “CRYSTAL MOET” and others
          </p>
        </AboutSection>

        <ScheduleSection>
          <h2 style={{ textAlign: 'left' }}>Schedule and tickets</h2>
          <ScheduleItem>
            <EventDate>
              <p>W</p>
              <h1>14</h1>
              <p>Nov</p>
            </EventDate>
            <Ticket>
              <TicketInfo>
                <h1 style={{ textAlign: 'left' }}>19:00</h1>
                <Place>ETKO HANGAR</Place>
              </TicketInfo>
              <TicketBuy>
                <Cost>from 1000 R</Cost>
                <Button>To buy tickets</Button>
              </TicketBuy>
            </Ticket>
          </ScheduleItem>
          <ScheduleItem>
            <EventDate>
              <p>W</p>
              <h1>14</h1>
              <p>Nov</p>
            </EventDate>
            <Ticket>
              <TicketInfo>
                <h1 style={{ textAlign: 'left' }}>19:00</h1>
                <Place>ETKO HANGAR</Place>
              </TicketInfo>
              <TicketBuy>
                <Cost>from 1000 R</Cost>
                <Button>To buy tickets</Button>
              </TicketBuy>
            </Ticket>
          </ScheduleItem>
        </ScheduleSection>

        <DetailsSection>
          <h2 style={{ textAlign: 'left' }}>More details</h2>
          <Details>
            <Detail>
              <h3>Event</h3>
              <p>Concert</p>
            </Detail>
            <Detail>
              <h3>Genre</h3>
              <p>Classical music</p>
            </Detail>
            <Detail>
              <h3>Age</h3>
              <p>12+</p>
            </Detail>
            <Detail>
              <h3>Language</h3>
              <p>Eng</p>
            </Detail>
            <Detail>
              <h3>Place</h3>
              <p>ETKO HANGAR</p>
            </Detail>
            <Detail>
              <h3>Duration</h3>
              <p>2 hours</p>
            </Detail>
          </Details>
        </DetailsSection>
      </Container>

      <HallLayout/>
      <MapSection>
        <MapHeader>
            <MapInfo>
              <MapTitle>How to get there</MapTitle>
              <MapAbout>
                <p>ETKO HANGAR</p>
                <p>Boulevard Ashei, 45</p>
              </MapAbout>
            </MapInfo>
            <Right>
              <Button>View on map</Button>
            </Right>
        </MapHeader>
        <Map src="https://maps.google.com/maps?width=100%25&amp;height=248&amp;hl=en&amp;q=Mouseiou%201,%20Nicosia%201097,%20Cyprus+(MYTICKET)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.maps.ie/population/">Calculate population in area</a>
        </Map>
      </MapSection>
      <CategoryEventsList title='Recently watched'/>
      <CategoryEventsList title='May like'/>
      <Support/>
    </div>
  )
}
