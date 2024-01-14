import React, { useState } from 'react';
import { 
    Container,
    InfoContainer,
    HallContainer,
    Tickets,
    Ticket,
    ZoneColor,
    Hall,
    Schema,
    Scene,
    Places,
    Zone,
    Buttons,
    Button
} from './styles';
import Image from 'next/image';
import PlaceButton from '@/components/v1/HallLayout/PlaceButton/PlaceButton';
import { places } from '@/data/places';

const HallLayout = () => {
    const [zoom, setZoom] = useState(1.0);

    function zoomIncrease() {
        if (zoom <= 2.2) {
            setZoom(zoom + 0.2);
        }
    }

    function zoomReduce() {
        if (zoom >= 0.8) {
            setZoom(zoom - 0.2);
        }
    }

  return (
    <Container>
        <h2>Схема зала</h2>
        <InfoContainer>
            <h3>NIF23 - THE LOVE OF DON PERLIMPLÍN AND BELISA IN THE GARDEN by Federico García Lorca</h3>
            <p style={{ opacity: '0.7' }}>14 ноября • ETKO HANGAR</p>
        </InfoContainer>
        <HallContainer>
            <Tickets>
                <Ticket>
                    <ZoneColor style={{ background: 'red' }} />
                    <h3>5000 Р</h3>
                </Ticket>
                <Ticket>
                    <ZoneColor style={{ background: 'red' }} />
                    <h3>5000 Р</h3>
                </Ticket>
                <Ticket>
                    <ZoneColor style={{ background: 'red' }} />
                    <h3>5000 Р</h3>
                </Ticket>
            </Tickets>
            <Hall>
                <Schema>
                    <Scene style={{ zoom: zoom }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="776" height="64" viewBox="0 0 776 64" fill="none">
                            <path d="M388 64C602.286 64 776 35.3462 776 0H0C0 35.3462 173.714 64 388 64Z" fill="white"/>
                        </svg>              
                    </Scene>
                    <Places style={{ zoom: zoom }}>
                        <Zone>
                            {places.map(place =>
                                <>
                                {place.zone === 'left' &&
                                    <PlaceButton
                                        color={place.color}
                                        disabled={place.disabled}
                                        selected={false}
                                        key={place.id}
                                    />
                                }
                                </>
                            )}
                        </Zone>
                        <Zone>
                            {places.map(place => 
                                <>
                                {place.zone === 'center' &&
                                    <PlaceButton
                                        color={place.color}
                                        disabled={place.disabled}
                                        selected={false}
                                        key={place.id}
                                    />
                                }
                                </>
                            )}
                        </Zone>
                        <Zone>
                            {places.map(place => 
                                <>
                                {place.zone === 'right' &&
                                    <PlaceButton
                                        color={place.color}
                                        disabled={place.disabled}
                                        selected={false}
                                        key={place.id}
                                    />
                                }
                                </>
                            )}
                        </Zone>
                    </Places>
                </Schema>
            </Hall>
            <Buttons>
                <Button onClick={zoomIncrease}>
                    <Image src='/icons/plus.svg' alt='bring closer' width={24} height={24} priority={true}/>
                </Button>
                <Button onClick={zoomReduce}>
                    <Image src='/icons/minus.svg' alt='move away' width={24} height={24} priority={true}/>
                </Button>
            </Buttons>
        </HallContainer>
    </Container>
  )
}

export default HallLayout;
