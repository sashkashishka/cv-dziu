import * as React from 'react';

import { Button } from '../../Button';

import styles from './CardTop.module.css';

interface iCardTopProps {
  logoImg: string;
  workTitle: string;
  time: string;
  description: string;
  url: string;
}

export const CardTop: React.FC<iCardTopProps> = ({
  logoImg,
  workTitle,
  time,
  description,
  url,
}) => {
  return (
    <div className={styles.cardTop}>
      <img
        className={styles.logoImg}
        src={logoImg}
        alt=""
      />

      <div className={styles.description}>
        <p className={styles.workTitle}>{workTitle}</p>
        <p className={styles.time}>{time}</p>
        <p className={styles.description}>{description}</p>
      </div>

      <a className={styles.buttonLink} href={url} target="_blank">
        <Button
          type="button"
          variant="white"
          className={styles.button}
        >
          На сайт
        </Button>
      </a>
    </div>
  );
}
