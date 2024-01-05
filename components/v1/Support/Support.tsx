import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonDesktop, ButtonMobile } from './styles';
import ChatPopup from '@/components/v1/Support/ChatPopup/ChatPopup';

const Support: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <ButtonDesktop onClick={() => setIsOpen(!isOpen)}>
            <Image
                src='/icons/support.svg'
                alt='support'
                width={24}
                height={24}
            />
        </ButtonDesktop>
        <ButtonMobile>
          <Link href='/Support'>
            <Image
                  src='/icons/support.svg'
                  alt='support'
                  width={24}
                  height={24}
            />
          </Link>
        </ButtonMobile>
        <ChatPopup isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default Support;
