import React, { useState } from 'react';
import { Form, Left, PhotoButton, AddPhotoText, Right, ButtonsWrapper } from './styles';
import { Label } from '@/ui/v1/Label/Label';
import { Input } from '@/ui/v1/Input/Input';
import { Button } from '@/ui/v1/Button/Button';
import Image from 'next/image';
import { useTranslation } from "next-i18next";

export const Info: React.FC = () => {
    const { t: translate } = useTranslation('profile'); 

    const [names, setNames] = useState('Ivan Ivanov');
    const [email, setEmail] = useState('expample@gmail.com');
    const [phone, setPhone] = useState('+7 980 785 78 87');
    const [date, setDate] = useState('11/12/1998');
    const [address, setAddress] = useState('st. Frankus, 45');

    function handleReset() {
        setNames('Ivan Ivanov');
        setEmail('expample@gmail.com');
        setPhone('+7 980 785 78 87');
        setDate('11/12/1998');
        setAddress('st. Frankus, 45');
    }

  return (
    <div>
        <h1>{translate(`Basic information`)}</h1>
        <Form>
            <Left>
                <PhotoButton>
                    <Image
                        src='/icons/plusPhoto.svg'
                        alt='add'
                        width={24}
                        height={24}
                        priority={true}
                    />
                </PhotoButton>
                <AddPhotoText>{translate(`Add photo`)}</AddPhotoText>
            </Left>
            <Right>
                <Label>
                    <span>{translate(`First and last name`)}</span>
                    <Input 
                        type='text'
                        value={names}
                        onChange={e => setNames(e.target.value)}
                    />
                </Label>
                <Label>
                    <span>{translate(`Email`)}</span>
                    <Input 
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Label>
                <Label>
                    <span>{translate(`Telephone`)}</span>
                    <Input 
                        type='phone'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </Label>
                <Label>
                    <span>{translate(`Date of Birth`)}</span>
                    <Input 
                        type='text'
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </Label>
                <Label>
                    <span>{translate(`Address`)}</span>
                    <Input 
                        type='text'
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </Label>
                <ButtonsWrapper>
                    <Button>{translate(`Save changes`)}</Button>
                    <Button
                        type='button'
                        styleType='tertiary'
                        onClick={handleReset}
                    >
                        {translate(`Reset changes`)}
                    </Button>
                </ButtonsWrapper>
            </Right>
        </Form>
    </div>
  )
}
