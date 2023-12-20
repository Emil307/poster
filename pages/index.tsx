import React from 'react'
import Head from 'next/head'
import { THomePageProps } from '@/components/v1/HomePage/types'
import { NextPageContext } from 'next'
import { HomePage } from '@/components/v1/HomePage/HomePage'
import { withLayout } from '@/components/v1/layout/Layout'

const HomeNextPage = (props: THomePageProps) => {
  return <HomePage {...props} />
}

HomeNextPage.getInitialProps = async (ctx: NextPageContext) => {
  const pageTitle = String(ctx.query.title)

  return {
    pageTitle
  }
}

export default withLayout(HomeNextPage)
