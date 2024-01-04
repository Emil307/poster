import React from 'react';
import Link from 'next/link';
import { InputsWrapper, ButtonsWrapper } from '@/components/v1/layout/AuthLayout/styles';
import { Label } from '@/ui/v1/Label/Label';
import { Input } from '@/ui/v1/Input/Input';
import { LinkStyled } from '@/ui/v1/Link/Link';
import { Button } from '@/ui/v1/Button/Button';

export const SignInPage: React.FC = () => {
  return (
    <form>
      <h1 style={{ textAlign: "center" }}>Вход</h1>
      <InputsWrapper>
        <Label>
          <span>E-mail</span>
          <Input type='E-mail' />
        </Label>
        <Label>
          <span>Пароль</span>
          <Input type='password' />
        </Label>
        <LinkStyled href="/RecoveryPassword">Не помню пароль</LinkStyled>
      </InputsWrapper>
      <ButtonsWrapper>
        <Button type='submit' styleType='primary'>Войти</Button>
        <Link href='/SignUp'><Button type='button' styleType='secondary'>Новый аккаунт</Button></Link>
      </ButtonsWrapper>
    </form>
  )
}
