import React from 'react';
import { Button } from './styles';

export interface Place {
    color: string;
    selected?: boolean;
    disabled?: boolean;
}

const PlaceButton: React.FC<Place> = ({ color, selected, disabled }) => {
  return (
    <Button 
      style={{
        background: selected ? '#fff' : color,
        width: selected ? '58px' : disabled ? '4px' : '16px',
        height: selected ? '58px' : disabled ? '4px' : '16px',
        border: selected ? `20px solid ${color}` : '',
      }}
    />
  )
}

export default PlaceButton;
