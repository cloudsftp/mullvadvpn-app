import React, { forwardRef } from 'react';
import styled from 'styled-components';

import ImageView from '../../../components/ImageView';
import { Colors } from '../../foundations';
import { buttonReset } from '../../styles';

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
  icon: string;
}

const variants = {
  primary: {
    background: Colors.white,
    hover: Colors.white60,
    disabled: Colors.white50,
  },
  secondary: {
    background: Colors.white60,
    hover: Colors.white80,
    disabled: Colors.white50,
  },
} as const;

const sizes = {
  small: 16,
  medium: 24,
};

// TODO: This should be removed when we have updated to the new icons from design system
const iconSizes = {
  small: 14,
  medium: 20,
};

const StyledButton = styled.button({
  ...buttonReset,

  background: 'transparent',
  height: 'var(--size)',
  width: 'var(--size)',
  borderRadius: '100%',
  '&:focus-visible': {
    outline: `2px solid ${Colors.white}`,
  },
});

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, variant = 'primary', size: sizeProp = 'medium', disabled, style, ...props }, ref) => {
    const styles = variants[variant];
    const size = sizes[sizeProp];
    const iconSize = iconSizes[sizeProp];
    return (
      <StyledButton
        ref={ref}
        disabled={disabled}
        style={
          {
            '--size': `${size}px`,
            ...style,
          } as React.CSSProperties
        }
        {...props}>
        <ImageView
          source={icon}
          tintColor={styles.background}
          tintHoverColor={styles.hover}
          disabled={disabled}
          height={iconSize}
          width={iconSize}
        />
      </StyledButton>
    );
  },
);

IconButton.displayName = 'Button';
