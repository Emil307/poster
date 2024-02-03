import React from 'react';
import { NextPageContext } from 'next';
import { ProfilePage } from '@/components/v1/ProfilePage/ProfilePage';
import { withLayout } from '@/components/v1/layout/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ProfileNextPage = () => {
  return <ProfilePage />
}

export async function getStaticProps({ locale }: any) {
  return {
      props: {
          ... (await serverSideTranslations(locale, ['profile', 'header', 'footer', 'support'])),
      },
  }
}

ProfileNextPage.getInitialProps = async (ctx: NextPageContext) => {
  const pageTitle = String(ctx.query.title)

  return {
    pageTitle
  }
}

export default withLayout(ProfileNextPage);
