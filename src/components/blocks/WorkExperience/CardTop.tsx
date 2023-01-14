import * as React from 'react';
import cn from 'classnames';

import styles from './CardTop.module.css';

interface iCardTopProps {
  logoImg: string;
  workTitle: string;
  time: string;
  description: string;
  bg: string;
  artShadow: string;
}

export const CardTop: React.FC<iCardTopProps> = ({
  logoImg,
  workTitle,
  time,
  description,
  bg,
  artShadow,
}) => {
  return (
    <div
      className={styles.cardTop}
    >
      <div
        className={cn(styles.bgShapeContainer)}
      >
        <div
          className={cn(styles.bgShapeBlur, 'gpu')}
        />
        <img src={bg} alt="" />
      </div>

      <div className={styles.innerCard}>
        <div className={styles.logoImg}>
          <img
            src={logoImg}
            alt=""
          />
        </div>

        <div className={styles.workInfo}>
          <p className={styles.workTitle}>{workTitle}</p>
          <p className={styles.time}>{time}</p>
        </div>

        <p className={styles.description}>{description}</p>
      </div>

      <div className={cn(styles.artShadow)}>
        <img className="gpu" src={artShadow} alt="" />
      </div>
    </div>
  );
}
