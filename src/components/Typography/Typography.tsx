import React from 'react';
import { DynamicComponent } from './Typograpghy.styled';

export const TypographyTagsMapping = {
  h2: 'h2',
  h3: 'h3',
  body1: 'p',
  body2: 'p',
};

export type TypographyProps = {
  className?: string;
  variant: keyof typeof TypographyTagsMapping;
  children: React.ReactNode;
};

export const Typography: React.FC<TypographyProps> = ({ className, variant, children }) => (
  <DynamicComponent
    as={TypographyTagsMapping[variant] as keyof JSX.IntrinsicElements}
    variant={variant}
    className={className}
  >
    {children}
  </DynamicComponent>
);
