import * as React from 'react';

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
      <div className={styles.left}>
        <img
          className={styles.logoImg}
          src={logoImg}
          alt={title} 
        />

        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>

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
            Смотреть
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
