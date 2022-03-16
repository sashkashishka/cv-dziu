import * as React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

interface iButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'purple' | 'white';
}

export const Button: React.FC<iButtonProps> = ({
  variant = 'purple',
  className,
  ...props
}) => (
  <button
    className={cn(
      styles.button,
      variant === 'purple'
        ? styles.purple
        : styles.white,
      className,
    )}
    {...props}
  />
);
