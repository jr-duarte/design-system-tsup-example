import React, { HTMLAttributeAnchorTarget } from 'react';

import type * as Stitches from '@stitches/react';

import { config } from '../../../styles/stitches.config';
import * as S from './styles';

type ButtonComponentProps = {
  tag?: 'button' | 'a';
  disabled?: boolean;
  children: string;
  onContrast?: boolean;
  border?: boolean;
  href?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
  css?: Stitches.CSS<typeof config>;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  iconSize?: number;
  iconEnd?: boolean;
  link?: boolean;
  fullWidth?: boolean;
  borderRadius?: keyof typeof config.theme.radii;
};

export default function Button({
  disabled = false,
  tag = 'button',
  onContrast = false,
  border = false,
  children,
  type = 'button',
  css,
  onClick,
  fullWidth = false,
  borderRadius = 'none',
  ...props
}: ButtonComponentProps) {
  return (
    <S.Wrapper
      data-testid="component-button"
      as={tag}
      css={{
        ...css,
        borderRadius: `$${borderRadius}`,
        width: fullWidth ? '100%' : 'auto',
      }}
      onContrast={onContrast}
      border={border}
      type={type}
      onClick={onClick}
      disabled={disabled}
      disabledStyled={disabled}
      {...props}
    >
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  );
}
