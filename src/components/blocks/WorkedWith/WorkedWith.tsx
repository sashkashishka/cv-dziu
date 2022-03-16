import * as React from 'react';
import cn from 'classnames';

import { Button } from '../../Button';

import styles from './WorkedWith.module.css';

export const WorkedWith: React.FC = () => {
  return (
    <div className={cn('section', styles.workedWith)}>
      <h2 className={styles.title}>
        С кем я работал?
      </h2>
      <p className={styles.subtitle}>
        Компании с которыми я сотрудничал и выполнял заказы.
      </p>

      <div className={styles.cardContainer}>
        <div className={styles.grid}>

        </div>

      </div>
    </div>
  );
}
