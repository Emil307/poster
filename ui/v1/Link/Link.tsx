import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { Span } from './styles';

export interface LinkProps extends PropsWithChildren {
    href: string,
}

export const LinkStyled: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <Link href={href}>
        <Span>{children}</Span>
    </Link>
  )
}
