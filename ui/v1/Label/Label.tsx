import React, { PropsWithChildren } from 'react';
import { LabelStyled } from './styles';

export interface LabelProps extends PropsWithChildren {}

export const Label: React.FC<LabelProps> = ({ children }) => {
 return (
  <LabelStyled>{children}</LabelStyled>
 )
}
