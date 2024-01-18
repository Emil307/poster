import React from 'react';
import Image from 'next/image';
import { Container } from './styles';

export interface AlertProps extends React.PropsWithChildren {}

export const Alert: React.FC<AlertProps> = ({ children }) => {
  return (
    <Container>
        <Image
            src='/icons/alert.svg'
            alt='alert'
            width={24}
            height={24}
            priority={true}
        />
        {children}
    </Container>
  )
}
