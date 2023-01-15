import * as React from 'react';
import cn from 'classnames';

import starIcon from '../../../icons/star.svg';

import styles from './Card.module.css';
import s from './VideoCard.module.css';

interface iCardProps {
  title: string;
  subtitle: string;
  logoImg: string;
  phoneImg: string;
  url: string;
  bg: string;
  firstJob?: boolean;
}

export const Card: React.FC<iCardProps> = ({
  title,
  subtitle,
  logoImg,
  phoneImg,
  url,
  bg,
  firstJob,
}) => {
  return (
    <div
      className={cn(
        styles.card,
        firstJob && styles.cardFirstJob,
      )}
      style={{
        '--card-bg': `url(${bg})`,
      } as React.CSSProperties}
    >
      {
        firstJob && (
          <div className={cn(s.videoCV, styles.firstJob)}>
            <img src={starIcon} alt="star" />
            first job
          </div>
        )
      }

      <img
        className={cn(
          styles.phoneImg,
          firstJob && styles.phoneImgFirstJob,
        )}
        src={phoneImg}
        alt={title}
      />

      <div className={cn(styles.infoBlock)}>
        <div
          className={cn(styles.logoImg)}
        >
          <img
            src={logoImg}
            alt={title}
          />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <a
          className={cn(styles.buttonLink, 'gpu')}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
        </a>
      </div>
    </div>
  );
}
