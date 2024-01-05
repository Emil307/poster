import React from "react";
import IntroSlider from "@/components/v1/HomePage/IntroSlider/IntroSlider";
import DatePickerComponent from "@/components/v1/DatePicker/DatePickerComponent";
import CategoryEventsList from "@/components/v1/HomePage/CategoryEventsList/CategoryEventsList";
import Support from "@/components/v1/Support/Support";
import SupportChat from '@/components/v1/Support/Support';

import { THomePageProps } from './types';
import { HomePageContainer } from './styles'
import { useTranslation } from "next-i18next";
import { events } from '@/data/events';

export const HomePage = ({ pageTitle }: THomePageProps) => {
    const { t: translate } = useTranslation('index'); 

    return <HomePageContainer>
        <IntroSlider items={events} activeSlideIndex={3}/>
        <DatePickerComponent />
        <CategoryEventsList title={translate('SoonTitle')}/>
        <CategoryEventsList title={translate('ConcertsTitle')}/>
        <CategoryEventsList title={translate('ForKidsTitle')}/>
        <CategoryEventsList title={translate('TheatersTitle')}/>
        <Support/>
        <SupportChat/>
    </HomePageContainer>
}
