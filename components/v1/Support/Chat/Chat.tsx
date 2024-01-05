import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import type { TMessage } from '@/domain/types/types';
import { Input } from '@/ui/v1/Input/Input';
import Image from 'next/image';

export interface ChatProps {
    messages: TMessage[]
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
    const [message, setMessage] = useState('');
    const [buttonVisible, setButtonVisible] = useState(false);
  
    useEffect(() => {
      if (message) {
        setButtonVisible(true);
      }
      if (!message) {
        setButtonVisible(false);
      }
    }, [message])

  return (
    <>
        <div className={styles.messages}>
        {messages.map(message =>
            <div style={{ 
                margin: message.owner === 'support' ? "0" : '0 0 0 calc(100% - 200px)',
                background: message.owner === 'support' ? '#ECECEE' : '#fff',
                borderRadius: message.owner === 'support' ? "8px 8px 8px 0px" : '8px 8px 0px 8px'
            }} 
            className={styles.message} 
            key={message.id}
            >
            <p>{message.text}</p>
            <span>{message.date}</span>
            </div>  
        )}
        </div>
        <div className={styles.controllers}>
        <Input 
            placeholder='Сообщение...'
            value={message}
            onChange={event => setMessage(event.target.value)}
        />
        {buttonVisible && 
            <button>
            <Image
                src='/icons/send.svg' alt='send'
                width={24} height={24}
            />
            </button>
        }
        </div>
    </>
  )
}

export default Chat