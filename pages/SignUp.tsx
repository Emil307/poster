import React from 'react';
import { SignUpPage } from '@/components/v1/SignUpPage/SignUpPage';
import { withAuthLayout } from '@/components/v1/layout/AuthLayout/AuthLayout';

const SignUpNextPage = () => {
 return <SignUpPage />
}

export default withAuthLayout(SignUpNextPage);