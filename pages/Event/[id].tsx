import React from 'react'
import { NextPageContext } from 'next'
import { withLayout } from '@/components/v1/layout/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { EventPage } from '@/components/v1/EventPage/EventPage';
import type { TEvent } from '@/domain/types/types';
import type { GetStaticPaths } from 'next';

const EventNextPage = (event: TEvent) => {
  return <EventPage event={event}/>
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [],
      fallback: 'blocking'
  }
}

export async function getStaticProps({ locale }: any) {
  return {
      props: {
          ... (await serverSideTranslations(locale, ['index', 'header', 'footer', 'support'])),
          
      },
  }
}

export default withLayout(EventNextPage)
