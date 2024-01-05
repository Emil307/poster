import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SupportPage } from '@/components/v1/Support/SupportPage/SupportPage'

const SupportNextPage = () => {
  return <SupportPage />
}

export async function getStaticProps({ locale }: any) {
  return {
      props: {
          ... (await serverSideTranslations(locale, ['support'])),
      },
  }
}

export default SupportNextPage