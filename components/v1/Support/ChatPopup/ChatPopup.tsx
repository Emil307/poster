import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Chat from '@/components/v1/Support/Chat/Chat';
import { messages } from '@/data/messages';

export interface SupportChatProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void
}

const ChatPopup: React.FC<SupportChatProps> = ({ isOpen, setIsOpen }) => {

  return (
    <div className={styles.page} onClick={() => setIsOpen(false)} >
        {isOpen &&
          <div className={styles.container} onClick={e => e.stopPropagation()}>
            <Chat messages={messages}/>
          </div>
        }
    </div>
  )
}

export default ChatPopup;
