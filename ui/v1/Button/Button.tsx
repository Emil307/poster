import React from 'react';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './styles';

export interface PrimaryButtonProps extends Omit<React.ComponentProps<'button'>, 'ref'> {
 styleType?: "primary" | "secondary" | "tertiary";
 width?: string;
 height?: string;
}

export const Button: React.FC<PrimaryButtonProps> = ({ children, styleType, height, width, ...props }) => {
  if (styleType === "primary") {
    return (
      <PrimaryButton style={{ height, width }} {...props}>{children}</PrimaryButton>
    )
  }
  if (styleType === "secondary") {
    return (
      <SecondaryButton style={{ height, width }} {...props}>{children}</SecondaryButton>
    )
  }
  if (styleType === "tertiary") {
    return (
      <TertiaryButton style={{ height, width }} {...props}>{children}</TertiaryButton>
    )
  }
  if (!styleType) {
    return (
      <PrimaryButton style={{ height, width }} {...props}>{children}</PrimaryButton>
    )
  }
}
