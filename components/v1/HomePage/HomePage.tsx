import React from "react";
import DatePickerComponent from "@/components/v1/DatePicker/DatePickerComponent";
import Link from 'next/link'

import { THomePageProps } from './types';
import { HomePageContainer } from './styles'

export const HomePage = ({ pageTitle }: THomePageProps) => {
    return <HomePageContainer>
        <h1>{pageTitle}</h1>
        <DatePickerComponent />
        <Link href="/SignIn">sign in </Link>
        <Link href="/ResetPassword">reset password</Link>
    </HomePageContainer>
}
