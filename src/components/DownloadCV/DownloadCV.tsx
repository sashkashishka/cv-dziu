import * as React from 'react';

import { Button } from '../Button';

import downloadIcon from '../../icons/download.svg';

import styles from './DownloadCV.module.css';

export const DownloadCV: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className }) => (
  <Button
    type="button"
    className={className}
    onClick={() => {
      window.open('https://cv.djinni.co/c6/2e701d2fe2d15f5296b26c29f66442/PDF-Dziubak_compressed.pdf', '_blank');
    }}
  >
    Download CV.pdf
    <img
      className={styles.icon}
      src={downloadIcon} 
      alt=""
    />
  </Button>
)
