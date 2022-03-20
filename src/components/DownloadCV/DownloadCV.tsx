import * as React from 'react';

import { Button } from '../Button';

import downloadIcon from '../../icons/download.svg';

import styles from './DownloadCV.module.css';

export const DownloadCV: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className }) => (
  <Button
    type="button"
    className={className}
    onClick={() => {
      window.open('https://cv.djinni.co/e5/4f3f6cc186bac55c9b7c19bee9ec4d/Dzubak_Aleksei.pdf', '_blank');
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
