import React from 'react';
import { Container, Content, AlertTitle, ButtonWrapper } from './styles';
import { Alert } from '@/ui/v1/Alert/Alert';
import { Button } from '@/ui/v1/Button/Button';
import { Tabs } from '@/ui/v1/Tabs/Tabs';
import { Info } from './Info/Info';
import { Settings } from './Settings/Settings';
import { Security } from './Security/Security';
import { useRouter } from 'next/router';
import { useTranslation } from "next-i18next";

const contents = [
  {
    children: <Info/>
  },
  {
    children: <Settings/>
  },
  {
    children: <Security/>
  }
];

export const ProfilePage: React.FC = () => {
  const { t: translate } = useTranslation('profile'); 
  const { locale } = useRouter();

  const tabs = [
    {
      title: 
        locale === 'en' ? "Basic information" :
        locale === 'ru' ? 'Основная информация' :
        locale === 'el' ? 'Βασικές πληροφορίες' :
        "Basic information",
    }, 
    {
      title: 
        locale === 'en' ? "Language and location" :
        locale === 'ru' ? 'Язык и локация' :
        locale === 'el' ? 'Γλώσσα και τοποθεσία' :
        "Language and location",
    }, 
    {
      title: 
        locale === 'en' ? "Password and safety" :
        locale === 'ru' ? 'Пароль и безопасность' :
        locale === 'el' ? 'κωδικό πρόσβασης και ασφάλεια' :
        "Password and safety",
    }, 
  ];

  return (
    <Container>
      <Alert>
        <div>
          <AlertTitle>{translate(`You haven't confirmed your email`)}</AlertTitle>
          <p>{translate(`We will send you a 5-digit code to confirm the validity of your email`)}</p>
        </div>
        <ButtonWrapper>
          <Button>{translate(`Send code`)}</Button>
        </ButtonWrapper>
      </Alert>
      <Content>
        <Tabs tabs={tabs} contents={contents}/>
      </Content>
    </Container>
  )
}
