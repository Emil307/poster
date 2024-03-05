import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { InputsWrapper, ButtonsWrapper } from '@/components/v1/layout/AuthLayout/styles';
import { Label } from '@/ui/v1/Label/Label';
import { Input } from '@/ui/v1/Input/Input';
import { LinkStyled } from '@/ui/v1/Link/Link';
import { Button } from '@/ui/v1/Button/Button';
import { login, getUser } from '@/api/auth';
import Loader from '@/ui/v1/Loader/Loader';
import { useTranslation } from "next-i18next";

export const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passswordError, setPasswordError] = useState(false);
  const [isError, setIsError] = useState(false);
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
      login(email, password)
        .then(response => response.text())
        .then((response: any) => {
          response = JSON.parse(response);
            
          if (response?.status === 'OK') {
            localStorage.setItem('token', response.data.token);
            window.location.assign('/');
          }
            
          if (response?.status === 'ERR') {
            setIsError(true);
          }
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

        <Label>
          {isError && <span style={{ color: 'var(--addable-red)' }}>Ошибка в логине или пароле</span>}
        </Label>
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
