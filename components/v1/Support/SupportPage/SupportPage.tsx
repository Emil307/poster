import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { messages } from '@/data/messages';
import Chat from '@/components/v1/Support/Chat/Chat';
import styles from './styles.module.scss';
import { useTranslation } from "next-i18next";

export const SupportPage = () => {
    const { t: translate } = useTranslation('support'); 

  return (
    <div className={styles.page}>
        <div>
            <h2 className={styles.title}>{translate('Chat with support')}</h2>
            <div className={styles.close}>
                <Link href='/'>
                    <Image
                        src='/icons/close.svg'
                        alt='close'
                        width={24}
                        height={24}
                        priority={true}
                    />
                </Link>
            </div>
        </div>
        <div className={styles.container}>
            <Chat messages={messages}/>
        </div>
    </div>
  )
}
