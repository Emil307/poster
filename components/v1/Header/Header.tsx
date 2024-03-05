import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Content, Left, Right } from "./styles";
import { AutoCompleteInput } from "@/components/v1/AutoCompleteInput/AutoCompleteInput";
import { SingleSelect } from "@/ui/v1/SingleSelect/SingleSelect";
import { Button } from "@/ui/v1/Button/Button";
import { useRouter } from 'next/router';
import { useTranslation } from "next-i18next";
import DropDown from "@/ui/v1/DropDown/DropDown";

export const Header = (): JSX.Element => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuthorized(true);
        }
    }, [])
    const { push, locale } = useRouter();
    const router = useRouter()
    const { t: translate } = useTranslation('header'); 

    const languages = [
        {
            id: 0,
            name: 'English',
            icon: <Image src="/icons/en.svg" alt="English" width={20} height={20} priority={true} quality={100} />,
            onSelect: () => {
                push('/', undefined, {locale: 'en'});
            },
        },
        {
            id: 1,
            name: 'Русский',
            icon: <Image src="/icons/ru.svg" alt="Russian" width={20} height={20} priority={true} quality={100} />,
            onSelect: () => {
                push('/', undefined, {locale: 'ru'});
            },
        },
        {
            id: 2,
            name: 'Greek',
            icon: <Image src="/icons/greece.svg" alt="Greece" width={20} height={20} priority={true} quality={100} />,
            onSelect: () => {
                push('/', undefined, {locale: 'el'});
            },
        },
    ]

    const dropDownOptions = [
        {
            id: 0,
            name: 
                locale === 'en' ? "Account Management" :
                locale === 'ru' ? 'Управление аккаунтом' :
                locale === 'el' ? 'Διαχείριση λογαριασμών' :
                "Account Management",
            onSelect: () => router.push('/Profile')
        }, 
        {
            id: 1,
            name: 
                locale === 'en' ? "My tickets" :
                locale === 'ru' ? 'Мои билеты' :
                locale === 'el' ? 'Τα εισιτήριά μου' :
                "My tickets",
            onSelect: () => router.push('/MyTickets') 
        },
        {
            id: 2,
            name: 
                locale === 'en' ? "Become an organizer" :
                locale === 'ru' ? 'Стать организатором' :
                locale === 'el' ? 'Γίνε διοργανωτής' :
                "Become an organizer",
        },
        {
            id: 3,
            name: 
                locale === 'en' ? "Logout" :
                locale === 'ru' ? 'Выйти из аккаунта' :
                locale === 'el' ? 'Αποσύνδεση' :
                "Logout",
                onSelect: () => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    location.reload();
                }
        }
    ]

    return <Container>
        <Content>
            <Left>
                <Link href='/'>
                    <Image src="/icons/logo-header.svg" alt="my ticket" width={83} height={32} priority={true} />
                </Link>
                <AutoCompleteInput />
            </Left>
            <Right>
                <SingleSelect
                    options={languages}
                    defaultSelected={locale === 'en' ? languages[0] : locale === 'ru' ? languages[1] : languages[2]}
                />
                {isAuthorized ?
                    <DropDown 
                        button={
                            <Image src="/icons/profile.svg" alt="profile"
                            width={40} height={40} priority={true} 
                            />
                        } 
                        options={dropDownOptions}
                    />
                :
                    <Link href='/SignIn'>
                        <Button styleType="tertiary" style={{ fontSize: "12px", width: "62px", height: "31px" }}>
                            {translate('Login')}
                        </Button>
                    </Link>
                }
            </Right>
        </Content>
    </Container>
}
