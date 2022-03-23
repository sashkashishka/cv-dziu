import * as React from 'react';

import { Button } from '../Button';

import downloadIcon from '../../icons/download.svg';

import styles from './DownloadCV.module.css';

export const DownloadCV: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className }) => (
  <Button
    type="button"
    className={className}
    onClick={() => {
      window.open('https://cv.djinni.co/e8/ec39937d129345fdbcd38f171efbd3/Dzubak_Aleksei__eng_.pdf', '_blank');
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
