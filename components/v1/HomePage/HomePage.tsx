import React from "react";
import DatePickerComponent from "@/components/v1/DatePicker/DatePickerComponent";
import EventsList from "@/components/v1/HomePage/EventsList/EventsList";

import { THomePageProps } from './types';
import { HomePageContainer } from './styles'

export const HomePage = ({ pageTitle }: THomePageProps) => {
    return <HomePageContainer>
        <DatePickerComponent />
        <EventsList title="Совсем скоро"/>
        <EventsList title="Концерты"/>
        <EventsList title="Детям"/>
        <EventsList title="Театр"/>
    </HomePageContainer>
}
