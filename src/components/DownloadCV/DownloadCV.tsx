import * as React from 'react';

import { Button } from '../Button';

import downloadIcon from '../../icons/download.svg';

import styles from './DownloadCV.module.css';

export const DownloadCV: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className }) => (
  <Button
    type="button"
    className={className}
    onClick={() => {
      window.open('https://cv.djinni.co/53/860a7d374585232e2222c3949399f7/Dzubak_Aleksei__RU__compressed.pdf', '_blank');
    }}
  >
    Download CV
    <img
      className={styles.icon}
      src={downloadIcon} 
      alt=""
    />
  </Button>
)
