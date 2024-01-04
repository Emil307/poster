import React from 'react';
import Link from 'next/link';
import { InputsWrapper, ButtonsWrapper } from '@/components/v1/layout/AuthLayout/styles';
import { Label } from '@/ui/v1/Label/Label';
import { Input } from '@/ui/v1/Input/Input';
import { Button } from '@/ui/v1/Button/Button';

export const ResetPasswordPage: React.FC = () => {
  return (
    <form>
      <h1 style={{ textAlign: "center", marginBottom: '20px' }}>Сброс пароля</h1>
      <InputsWrapper>
        <Label>
          <span>Новый пароль</span>
          <Input type='password' />
        </Label>
        <Label>
          <span>Повторите новый пароль</span>
          <Input type='password' />
        </Label>
      </InputsWrapper>
      <ButtonsWrapper>
        <Button type='submit' styleType='primary'>Обновить пароль</Button>
      </ButtonsWrapper>
    </form>
  )
}