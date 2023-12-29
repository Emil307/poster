import React from "react";
import DatePickerComponent from "@/components/v1/DatePicker/DatePickerComponent";
import EventsList from "@/components/v1/HomePage/EventsList/EventsList";

import { THomePageProps } from './types';
import { HomePageContainer } from './styles'
import { useTranslation } from "next-i18next";

export const HomePage = ({ pageTitle }: THomePageProps) => {
    const { t: translate } = useTranslation('index'); 

    return <HomePageContainer>
        <DatePickerComponent />
        <EventsList title={translate('SoonTitle')}/>
        <EventsList title={translate('ConcertsTitle')}/>
        <EventsList title={translate('ForKidsTitle')}/>
        <EventsList title={translate('TheatersTitle')}/>
    </HomePageContainer>
}
