import React from 'react';
import { InputStyled } from './styles';

export interface InputProps extends Omit<React.ComponentProps<'input'>, 'ref'> {

}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <InputStyled {...props} />
  )
}
