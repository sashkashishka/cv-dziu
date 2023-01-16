import * as React from 'react';

import { Button } from '../Button';

import downloadIcon from '../../icons/download.svg';

import styles from './DownloadCV.module.css';

export const DownloadCV: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className }) => (
  <Button
    type="button"
    className={className}
    onClick={() => {
      window.open('https://cv.djinni.co/51/e21ddbad37d0ae88cb44f120d18313/PDF-Dziubak_compressed.pdf', '_blank');
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
