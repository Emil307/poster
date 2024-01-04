import React from 'react';
import Link from 'next/link';
import { InputsWrapper, ButtonsWrapper } from '@/components/v1/layout/AuthLayout/styles';
import { Label } from '@/ui/v1/Label/Label';
import { Input } from '@/ui/v1/Input/Input';
import { Button } from '@/ui/v1/Button/Button';

export const RecoveryPasswordPage: React.FC = () => {
  return (
    <form>
      <h1 style={{ textAlign: "center", marginBottom: '20px' }}>Восстановление пароля</h1>
      <p style={{ maxWidth: '498px' }}>
        Для восстановления доступа к аккаунту отправим вам ссылку для сброса и обновления пароля
      </p>
      <InputsWrapper>
        <Label>
          <span>E-mail</span>
          <Input type='E-mail' />
        </Label>
      </InputsWrapper>
      <ButtonsWrapper>
        <Button type='submit' styleType='primary'>Отправить ссылку</Button>
        <Link href='/SignIn'><Button type='button' styleType='secondary'>Назад</Button></Link>
      </ButtonsWrapper>
    </form>
  )
}
