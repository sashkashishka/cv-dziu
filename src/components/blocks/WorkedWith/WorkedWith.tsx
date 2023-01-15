import * as React from 'react';
import cn from 'classnames';

import bubbleGa from '../../../images/bubbles/buble-ga.png';
import bubbleDa from '../../../images/bubbles/buble-da.png';
import bubbleFi from '../../../images/bubbles/buble-fi.png';
import bubbleFr from '../../../images/bubbles/buble-fr.png';

import { DownloadCV } from '../../DownloadCV';

import { VideoCard } from './VideoCard';
import { Card } from './Card';
import { LastCard } from './LastCard';

import { gridCards } from './constants';


import styles from './WorkedWith.module.css';

export const WorkedWith: React.FC = () => {
  return (
    <div className={cn(styles.workedWith)}>
      <div className={cn(styles.bgShapeContainer)}>
        <div
          className={cn(styles.bgShapeBlur)}
        />
      </div>

      <div className={cn('section', styles.acquanitedBlock)}>
        <div className={cn(styles.titleContainer)}>
          <p className={cn('title', styles.title)}>
            Let's get acquainted
          </p>

          <p className="subtitle">
            In 30 seconds I will explain why you need to cooperate with me
          </p>
        </div>

        <VideoCard />

        <DownloadCV
          className={styles.cvBtn}
        />

        <div
          className={styles.floatIcons}
        >
          <img
            className={cn(styles.floatIcon, 'da')}
            src={bubbleDa}
          />

          <img
            className={cn(styles.floatIcon, 'fi')}
            src={bubbleFi}
          />

          <img
            className={cn(styles.floatIcon, 'fr')}
            src={bubbleFr}
          />

          <img
            className={cn(styles.floatIcon, 'ga')}
            src={bubbleGa}
          />
        </div>
      </div>

      <div className={cn('section', styles.experienceSection)}>
        <p className={cn('title', styles.experienceTitle)}>
          With whom I worked
        </p>
        <p className={cn('subtitle', styles.experienceSubtitle)}>
          Companies I collaborated with
        </p>

      </div>


      <div className={cn('section', styles.cardContainer)}>
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

        <LastCard />

      </div>
    </div>
  );
}
