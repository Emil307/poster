import React from 'react';
import Link from 'next/link';
import { Label } from '@/ui/v1/Label/Label';
import { Input } from '@/ui/v1/Input/Input';
import { Button } from '@/ui/v1/Button/Button';
import { InputsWrapper, ButtonsWrapper } from '@/components/v1/layout/AuthLayout/styles';

export const SignUpPage: React.FC = () => {
  return (
    <form>
        <h1 style={{ textAlign: "center" }}>Регистрация</h1>
        <InputsWrapper>
            <Label>
                <span>E-mail</span>
                <Input type='email' />
            </Label>
            <Label>
                <span>Пароль</span>
                <Input type='password' />
            </Label>
            <Label>
                <span>Повторно введите пароль</span>
                <Input type='password' />
            </Label>
        </InputsWrapper>
        <ButtonsWrapper>
            <Button styleType='primary'>Создать аккаунт</Button>
            <Link href="/SignIn">
                <Button styleType='secondary'>Назад</Button>
            </Link>
        </ButtonsWrapper>
    </form>
  )
}

