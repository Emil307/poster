import React from 'react';
import { ResetPasswordPage } from '@/components/v1/ResetPasswordPage/ResetPasswordPage';
import { withAuthLayout } from '@/components/v1/layout/AuthLayout/AuthLayout';

const ResetPasswordNextPage = () => {
 return <ResetPasswordPage />
}

export default withAuthLayout(ResetPasswordNextPage);