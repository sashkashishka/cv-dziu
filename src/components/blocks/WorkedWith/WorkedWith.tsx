import * as React from 'react';
import cn from 'classnames';

import { Button } from '../../Button';
import { Card } from './Card';
import { LastCard } from './LastCard';

import { gridCards } from './constants';


import styles from './WorkedWith.module.css';

export const WorkedWith: React.FC = () => {
  return (
    <div className={cn('section', styles.workedWith)}>
      <h2 className={styles.title}>
        With whom I worked
      </h2>
      <p className={styles.subtitle}>
        Companies I collaborated with
      </p>

      <div className={styles.cardContainer}>
        <div className={styles.grid}>
          {
            gridCards.map(card => (
              <Card
                key={card.title}
                {...card}
              />
            ))
          }
        </div>

        <LastCard
          title="There's more"
          subtitle="I've mentioned the main/largest projects I worked on. We may discuss further upon meeting"
        />
          

      </div>
    </div>
  );
}
