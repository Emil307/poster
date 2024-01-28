import React from 'react';
import { Container } from './styles';

export interface AlertProps extends React.PropsWithChildren {}

export const Alert: React.FC<AlertProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
