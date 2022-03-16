import * as React from 'react';

import { Button } from '../../Button';

import styles from './Card.module.css';

interface iCardProps {
  title: string;
  url: string;
  icon: string;
  hasAwards?: boolean;
}

export const Card: React.FC<iCardProps> = ({
  title,
  url,
  icon,
  hasAwards = false,
}) => {
  return (
    <div className={styles.card}>
      {
        hasAwards && (
          <div className={styles.awardContainer}>
            <svg width="33" height="56" viewBox="0 0 33 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33 56V0H0V56L16.7705 48L33 56Z" fill="#A99160"/>
            </svg>

            <svg width="33" height="55" viewBox="0 0 33 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33 55V-1H0V55L16.7705 47L33 55Z" fill="#3F0A34"/>
            </svg>
          </div>
        )
      }

      <img
        className={styles.icon}
        src={icon}
        alt=""
      />

      <p className={styles.title}>
        {title}
      </p>
      <span>
        {url}
      </span>

      <a
        className={styles.buttonLink}
        href={`//${url}`}
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
  );
}
