import React from 'react'
import Head from 'next/head'
import { NextPageContext } from 'next'
import { MyTicketsPage } from '@/components/v1/MyTicketsPage/MyTicketsPage'
import { withLayout } from '@/components/v1/layout/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const MyTicketsNextPage = () => {
  return <MyTicketsPage />
}

export async function getStaticProps({ locale }: any) {
  return {
      props: {
          ... (await serverSideTranslations(locale, ['ticketsPage', 'header', 'footer'])),
      },
  }
}

MyTicketsNextPage.getInitialProps = async (ctx: NextPageContext) => {
  const pageTitle = String(ctx.query.title)

  return {
    pageTitle
  }
}

export default withLayout(MyTicketsNextPage)
