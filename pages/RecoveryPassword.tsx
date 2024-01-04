import React from 'react';
import { RecoveryPasswordPage } from '@/components/v1/RecoveryPasswordPage/RecoveryPasswordPage';
import { withAuthLayout } from '@/components/v1/layout/AuthLayout/AuthLayout';

const RecoveryPasswordNextPage = () => {
 return <RecoveryPasswordPage />
}

export default withAuthLayout(RecoveryPasswordNextPage);