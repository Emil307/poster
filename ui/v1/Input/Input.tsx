import React from 'react';
import { InputStyled } from './styles';

export interface InputProps extends Omit<React.ComponentProps<'input'>, 'ref'> {
  isInvalid?: boolean;
}

const invalidStyles = {
  backgroundColor: 'var(--addable-red-bg)',
  border: '1px var(--addable-red) solid',
  color: 'var(--addable-red)'
}

export const Input: React.FC<InputProps> = ({ isInvalid, ...props }) => {
  return (
    <InputStyled style={isInvalid ? invalidStyles : {}} {...props} />
  )
}
