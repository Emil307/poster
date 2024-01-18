import React, { useState } from 'react';
import { Container, Button } from './styles';
import selectedPlacesState from '@/store/selectedPlacesState';
import { TPlace } from '@/domain/types/types';
import { observer } from 'mobx-react-lite';

export interface Place {
  place: TPlace; 
  color: string;
}

const PlaceButton: React.FC<Place> = observer(({ place, color }) => {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    if (!place.disabled) {
      if (!selected) {
        setSelected(true);
        selectedPlacesState.selectPlace(place);
      }
      if (selected) {
        setSelected(false);
        selectedPlacesState.unSelectPlace(place);
      }
    }
  }

  return (
    <Container>
      <Button 
        onClick={handleClick}
        style={{
          background: selected ? '#fff' : color,
          width: selected ? '32px' : place.disabled ? '4px' : '16px',
          height: selected ? '32px' : place.disabled ? '4px' : '16px',
          border: selected ? `10px solid ${color}` : '',
        }}
      />
    </Container>
  )
});

export default PlaceButton;
