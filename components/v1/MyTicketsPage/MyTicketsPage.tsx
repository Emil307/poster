import React, { Fragment } from 'react';
import EventsList from '@/components/v1/EventsList/EventsList';
import TicketCard from '@/components/v1/TicketCard/TicketCard';
import { events } from '@/data/events';
import { tickets } from '@/data/tickets';
import { Tab } from '@headlessui/react';
import styles from './styles.module.scss';
import { useTranslation } from "next-i18next";

export const MyTicketsPage = () => {
  const { t: translate } = useTranslation('ticketsPage');

  return (
    <div className={styles.container}>
      <Tab.Group>
        <div className={styles.toggle}>
          <Tab.List>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? styles.selected : styles.default
                  }
                >
                  {translate('My Tickets')}
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? styles.selected : styles.default
                  }
                >
                  {translate('Favorite')}
                </button>
              )}
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <EventsList events={events}/>
          </Tab.Panel>
          <Tab.Panel>
            <div className={styles.tickets}>
              {tickets.map(ticket =>
                <TicketCard ticket={ticket} key={ticket.id}/>
              )}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
