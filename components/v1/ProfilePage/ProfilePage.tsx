import React from 'react';
import { Container, Content, AlertTitle, ButtonWrapper } from './styles';
import { Alert } from '@/ui/v1/Alert/Alert';
import { Button } from '@/ui/v1/Button/Button';
import { Tabs } from '@/ui/v1/Tabs/Tabs';
import { Info } from './Info/Info';
import { Settings } from './Settings/Settings';
import { Security } from './Security/Security';

const tabs = [
  {
    title: 'Basic information'
  },
  {
    title: 'Language and location'
  },
  {
    title: 'Password and safety'
  },
];

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
  return (
    <Container>
      <Alert>
        <div>
          <AlertTitle>You haven't confirmed your email</AlertTitle>
          <p>We will send you a 5-digit code to confirm the validity of your email</p>
        </div>
        <ButtonWrapper>
          <Button>Send code</Button>
        </ButtonWrapper>
      </Alert>
      <Content>
        <Tabs tabs={tabs} contents={contents}/>
      </Content>
    </Container>
  )
}
