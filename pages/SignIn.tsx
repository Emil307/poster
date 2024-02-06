import React from 'react';
import { SignInPage } from '@/components/v1/SignInPage/SignInPage';
import { withAuthLayout } from '@/components/v1/layout/AuthLayout/AuthLayout';
import { NextPageContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SignInNextPage = () => {
 return <SignInPage />
}

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ... (await serverSideTranslations(locale, ['signIn'])),
        },
    }
  }
  
  SignInNextPage.getInitialProps = async (ctx: NextPageContext) => {
    const pageTitle = String(ctx.query.title)
  
    return {
      pageTitle
    }
  }

export default withAuthLayout(SignInNextPage);