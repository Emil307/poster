import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { InputsWrapper, ButtonsWrapper } from '@/components/v1/layout/AuthLayout/styles';
import { Label } from '@/ui/v1/Label/Label';
import { Input } from '@/ui/v1/Input/Input';
import { LinkStyled } from '@/ui/v1/Link/Link';
import { Button } from '@/ui/v1/Button/Button';
import { getUser } from '@/api/auth';
import Loader from '@/ui/v1/Loader/Loader';
import { useTranslation } from "next-i18next";

export const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passswordError, setPasswordError] = useState(false);
  const [isAwaiting, setIsAwaiting] = useState(false);
  const { t: translate } = useTranslation('signIn'); 

  function handleSubmit(event: any) {
    event.preventDefault();

    setIsAwaiting(true);

    if (!email) {
      setEmailError(true);
      setIsAwaiting(false);
    }
    if (!password) {
      setPasswordError(true);
      setIsAwaiting(false);
    }

    if (email && password) {
      getUser(email, password)
        .then(({ data }: any) => {
          window.location.assign('/profile');
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsAwaiting(false)
        })
    }
  }

  useEffect(() => {
    if (email) {
      setEmailError(false);
    }
    if (password) {
      setPasswordError(false);
    }
  }, [email, password]);

  return (
    <form onSubmit={event => handleSubmit(event)}> 
      <h1 style={{ textAlign: "center" }}>{translate('Log in')}</h1>
      <InputsWrapper>
        <Label>
          <span>{translate('Email')}</span>
          <Input 
            isInvalid={emailError ? true : false}
            type='E-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {emailError && 
            <span style={{ color: 'var(--addable-red)' }}>{translate('Check that you have filled it in correctly')}</span>
          }
        </Label>
        <Label>
          <span>{translate('Password')}</span>
          <Input
            isInvalid={passswordError ? true : false}
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {passswordError && 
            <span style={{ color: 'var(--addable-red)' }}>{translate('Check that you have filled it in correctly')}</span>
          }
        </Label>
        <LinkStyled href="/RecoveryPassword">{translate('I do not remember the password')}</LinkStyled>
      </InputsWrapper>
      <ButtonsWrapper>
        <Button
          disabled={emailError || passswordError || isAwaiting ? true : false}
          type='submit'
          styleType='primary'
        >
          {isAwaiting ? <Loader/> : <>{translate('LoginButton')}</>}
        </Button>
        <Link href='/SignUp'><Button type='button' styleType='secondary'>{translate('New account')}</Button></Link>
      </ButtonsWrapper>
    </form>
  )
}
