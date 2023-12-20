import React, { useState } from 'react';
import Image from 'next/image';
import { FooterContainer, FormContainer, Title, Paragraph, Form, Info, Socials, InfoItem, LinksTitle, Links, Link } from './styles';
import backgroundImage from '@/public/icons/logo-footer.svg';
import { Input } from '@/ui/v1/Input/Input';
import { Button } from '@/ui/v1/Button/Button';

export const Footer = () => {
    const [email, setEmail] = useState('');

    return <FooterContainer style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom', backgroundSize: 'contain' }}>
        <FormContainer>
            <Title>Хочешь быть в курсе всех мероприятий?</Title>
            <Paragraph>Подписывайся на нашу рассылку</Paragraph>
            <Form>
                <Input 
                    placeholder='example@gmail.com' 
                    type='E-mail'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{ borderRadius: '24px', padding: '16px' }}
                />
                <Button>Подпишусь!</Button>
            </Form>
        </FormContainer>
        <Info>
            <Socials>
                <a><Image src='/icons/instagram.svg' alt="instagram" width={32} height={32} priority={true} /></a>
                <a><Image src='/icons/facebook.svg' alt="facebook" width={32} height={32} priority={true} /></a>
            </Socials>
            <InfoItem>
                <LinksTitle>Партнерам</LinksTitle>
                <Links>
                    <Link>Стать организатором</Link>
                    <Link>Связаться с нами</Link>
                    <Link>API партнерам </Link>
                </Links>
            </InfoItem>
            <InfoItem>
                <LinksTitle>My ticket</LinksTitle>
                <Links>
                    <Link>Мои билеты</Link>
                    <Link>Возврат билетов</Link>
                    <Link>Пользовательское соглашение</Link>
                    <Link>Безопасность данных</Link>
                    <Link>Офлайн кассы</Link>
                    <Link>QR-коды</Link>
                </Links>
            </InfoItem>
        </Info>
    </FooterContainer>
}
