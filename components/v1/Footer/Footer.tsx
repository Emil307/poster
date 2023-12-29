import React, { useState } from 'react';
import Image from 'next/image';
import { FooterContainer, FormContainer, Title, Paragraph, Form, Info, Socials, InfoItem, LinksTitle, Links, Link } from './styles';
import backgroundImage from '@/public/icons/logo-footer.svg';
import { Input } from '@/ui/v1/Input/Input';
import { Button } from '@/ui/v1/Button/Button';
import { useTranslation } from "next-i18next";

export const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const { t: translate } = useTranslation('footer'); 

    return <FooterContainer style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom', backgroundSize: 'contain' }}>
        <FormContainer>
            <Title>{translate("title")}</Title>
            <Paragraph>{translate("subTitle")}</Paragraph>
            <Form>
                <Input 
                    placeholder='example@gmail.com' 
                    type='E-mail'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{ borderRadius: '24px', padding: '16px' }}
                />
                <Button>{translate("button")}</Button>
            </Form>
        </FormContainer>
        <Info>
            <Socials>
                <a><Image src='/icons/instagram.svg' alt="instagram" width={32} height={32} priority={true} /></a>
                <a><Image src='/icons/facebook.svg' alt="facebook" width={32} height={32} priority={true} /></a>
            </Socials>
            <InfoItem>
                <LinksTitle>{translate("partners")}</LinksTitle>
                <Links>
                    <Link>{translate("organizer")}</Link>
                    <Link>{translate("contact")}</Link>
                    <Link>{translate("APIPartnets")} </Link>
                </Links>
            </InfoItem>
            <InfoItem>
                <LinksTitle>My ticket</LinksTitle>
                <Links>
                    <Link>{translate("myTickets")}</Link>
                    <Link>{translate("return")}</Link>
                    <Link>{translate("TermsOfUse")}</Link>
                    <Link>{translate("dataSecurity")}</Link>
                    <Link>{translate("OfflineCashRegisters")}</Link>
                    <Link>{translate("QRCodes")}</Link>
                </Links>
            </InfoItem>
        </Info>
    </FooterContainer>
}
