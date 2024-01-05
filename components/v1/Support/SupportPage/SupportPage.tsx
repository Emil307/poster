import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { messages } from '@/data/messages';
import Chat from '@/components/v1/Support/Chat/Chat';
import styles from './styles.module.scss';

export const SupportPage = () => {
  return (
    <div className={styles.page}>
        <div>
            <h2 className={styles.title}>Чат с поддрежкой</h2>
            <div className={styles.close}>
                <Link href='/'>
                    <Image
                        src='/icons/close.svg'
                        alt='close'
                        width={24}
                        height={24}
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
