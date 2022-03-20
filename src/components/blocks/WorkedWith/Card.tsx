import * as React from 'react';
import cn from 'classnames';

import { Button } from '../../Button';

import styles from './Card.module.css';

interface iCardProps {
  title: string;
  subtitle: string;
  logoImg: string;
  phoneImg: string;
  url: string;
}

export const Card: React.FC<iCardProps> = ({
  title,
  subtitle,
  logoImg,
  phoneImg,
  url,
}) => {
  return (
    <div className={styles.card}>
      <div className={cn(styles.elipse, styles.blue)}/>
      <div className={cn(styles.elipse, styles.red)}/>

      <div className={styles.left}>
        <div className={styles.infoBlock}>
          <img
            className={styles.logoImg}
            src={logoImg}
            alt={title} 
          />

          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </div>
        <a
          className={styles.buttonLink}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            type="button"
            variant="white"
            className={styles.button}
          >
            Watch
          </Button>
        </a>
      </div>

      <img
        className={styles.phoneImg}
        src={phoneImg}
        alt={title} 
      />
    </div>
  );
}
