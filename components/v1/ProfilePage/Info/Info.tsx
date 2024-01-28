import React, { useState } from 'react';
import { Form, Left, PhotoButton, AddPhotoText, Right, ButtonsWrapper } from './styles';
import { Label } from '@/ui/v1/Label/Label';
import { Input } from '@/ui/v1/Input/Input';
import { Button } from '@/ui/v1/Button/Button';
import Image from 'next/image';

export const Info: React.FC = () => {
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
        <h1>Basic information</h1>
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
                <AddPhotoText>Add photo</AddPhotoText>
            </Left>
            <Right>
                <Label>
                    <span>First and last name</span>
                    <Input 
                        type='text'
                        value={names}
                        onChange={e => setNames(e.target.value)}
                    />
                </Label>
                <Label>
                    <span>Email</span>
                    <Input 
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Label>
                <Label>
                    <span>Telephone</span>
                    <Input 
                        type='phone'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </Label>
                <Label>
                    <span>Date of Birth</span>
                    <Input 
                        type='text'
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </Label>
                <Label>
                    <span>Address</span>
                    <Input 
                        type='text'
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </Label>
                <ButtonsWrapper>
                    <Button>Save changes</Button>
                    <Button
                        type='button'
                        styleType='tertiary'
                        onClick={handleReset}
                    >
                        Reset changes
                    </Button>
                </ButtonsWrapper>
            </Right>
        </Form>
    </div>
  )
}
