import * as React from 'react';

import { Button } from '../Button';

import downloadIcon from '../../icons/download.svg';

import styles from './DownloadCV.module.css';

export const DownloadCV: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className }) => (
  <Button
    type="button"
    className={className}
    onClick={() => {
      window.open('#', '_blank');
    }}
  >
    Cкачать CV
    <img
      className={styles.icon}
      src={downloadIcon} 
      alt=""
    />
  </Button>
)
