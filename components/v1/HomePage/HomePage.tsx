import React from "react";

import { THomePageProps } from './types';
import { HomePageContainer } from './styles'

export const HomePage = ({ pageTitle }: THomePageProps) => {
    return <HomePageContainer>
        <h1>{pageTitle}</h1>
    </HomePageContainer>
}
