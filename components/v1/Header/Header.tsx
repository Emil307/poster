import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Content, Left, Right } from "./styles";
import { AutoCompleteInput } from "@/components/v1/AutoCompleteInput/AutoCompleteInput";
import { SingleSelect } from "@/ui/v1/SingleSelect/SingleSelect";
import { Button } from "@/ui/v1/Button/Button";
import { useRouter } from 'next/router';
import { useTranslation } from "next-i18next";

export const Header = (): JSX.Element => {
    const { push } = useRouter();
    const { t: translate } = useTranslation('header'); 

    const languages = [
        {
            name: 'English',
            icon: <Image src="/icons/en.svg" alt="English" width={20} height={20} priority={true} quality={100} />,
            onSelect: () => {
                push('/', undefined, {locale: 'en'});
            },
        },
        {
            name: 'Русский',
            icon: <Image src="/icons/ru.svg" alt="Russian" width={20} height={20} priority={true} quality={100} />,
            onSelect: () => {
                push('/', undefined, {locale: 'ru'});
            },
        },
        {
            name: 'Greek',
            icon: <Image src="/icons/greece.svg" alt="Greece" width={20} height={20} priority={true} quality={100} />,
            onSelect: () => {
                push('/', undefined, {locale: 'el'});
            },
        },
    ]

    return <Container>
        <Content>
            <Left>
                <Image src="/icons/logo-header.svg" alt="my ticket" width={83} height={32} priority={true} />
                <AutoCompleteInput />
            </Left>
            <Right>
                <SingleSelect options={languages} />
                <Link href='/SignIn'>
                    <Button styleType="tertiary" style={{ fontSize: "12px", width: "62px", height: "31px" }}>{translate('Login')}</Button>
                </Link>
            </Right>
        </Content>
    </Container>
}
