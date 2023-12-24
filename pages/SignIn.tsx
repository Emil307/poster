import React from 'react';
import { SignInPage } from '@/components/v1/SignInPage/SignInPage';
import { withAuthLayout } from '@/components/v1/layout/AuthLayout/AuthLayout';

const SignInNextPage = () => {
 return <SignInPage />
}

export default withAuthLayout(SignInNextPage);