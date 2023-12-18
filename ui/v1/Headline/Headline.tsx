import { styled } from '@linaria/react'

export const Headline = styled.div<{ fontSize?: number }>`
    font-size: ${ ({fontSize}) => fontSize ? fontSize + 'px' : '10px' };
`
