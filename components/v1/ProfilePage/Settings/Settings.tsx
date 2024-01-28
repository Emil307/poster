import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import { SingleSelect } from "@/ui/v1/SingleSelect/SingleSelect";
import { Content, Select, SelectTitle } from './styles';

export const Settings: React.FC = () => {
  const { push, locale } = useRouter();
  const router = useRouter()

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

  return (
    <div>
        <h1>Language and location</h1>
        <Content>
          <Select>
            <SelectTitle>Language</SelectTitle>
            <SingleSelect
              options={languages}
              defaultSelected={locale === 'en' ? languages[0] : locale === 'ru' ? languages[1] : languages[2]}
            />
          </Select>
        </Content>
    </div>
  )
}
