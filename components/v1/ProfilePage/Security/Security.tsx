import React, { useState } from 'react';
import { Label } from '@/ui/v1/Label/Label';
import { Input } from '@/ui/v1/Input/Input';
import { Button } from '@/ui/v1/Button/Button';
import { Form, ButtonWrapper } from './styles';
import { useTranslation } from "next-i18next";

export const Security: React.FC = () => {
    const [oldPassword, setOldPassword] = useState(''); 
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordRepeat, setNewPasswordRepeat] = useState('');
    const { t: translate } = useTranslation('profile'); 

  return (
    <div>
        <h1>{translate(`Password and safety`)}</h1>
        <Form>  
            <Label>
                <span>{translate(`Old Password`)}</span>
                <Input 
                    type='password'
                    value={oldPassword}
                    onChange={e => setOldPassword(e.target.value)}
                />
            </Label>
            <Label>
                <span>{translate(`New Password`)}</span>
                <Input 
                    type='password'
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                />
            </Label>
            <Label>
                <span>{translate(`Repeat new password`)}</span>
                <Input 
                    type='password'
                    value={newPasswordRepeat}
                    onChange={e => setNewPasswordRepeat(e.target.value)}
                />
            </Label>
            <ButtonWrapper>
                <Button
                    styleType='tertiary'
                >
                    {translate(`Save changes`)}
                </Button>
            </ButtonWrapper>
        </Form>
    </div>
  )
}
