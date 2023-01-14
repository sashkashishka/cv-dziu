import * as React from 'react';
import cn from 'classnames';

import bubbleGa from '../../../images/bubbles/buble-ga.png';
import bubbleDa from '../../../images/bubbles/buble-da.png';
import bubbleFi from '../../../images/bubbles/buble-fi.png';
import bubbleFr from '../../../images/bubbles/buble-fr.png';

import { BgShapeColor } from '../../BgShapes/Color';
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
        <BgShapeColor
          gradientId="work-with-shape-1"
          className={cn(styles.bhShape1)}
          width="1127"
          height="1052"
          renderPath={fill => (
            <path
              fill={fill}
              fillRule="evenodd"
              d="M803.003 179.628c-42.832-30.58-77.303-76.338-128.425-88.84-51.185-12.519-103.65 30.717-155.135 19.491C428.181 90.382 357.671-6.151 264.57 1.394c-83.901 6.8-162.687 71.895-202.679 145.964-40.112 74.291-1.725 166.376-11.255 250.265-9.427 82.983-68.541 163.629-44.864 243.72 23.66 80.029 119.538 113.561 170.113 179.944 54.158 71.087 53.565 199.643 139.014 225.813 91.161 27.92 168.752-93.663 263.684-102.477 81.335-7.552 172.204 107.367 235.796 56.097 75.005-60.47-18.994-210.17 44.831-282.342 61.137-69.132 244.77 21.764 265.2-68.234 21.94-96.629-155.79-126.404-200.999-214.577-24.814-48.398 31.5-111.953 8.347-161.167-22.937-48.754-84.904-63.465-128.755-94.772Z"
              clipRule="evenodd"
            />
          )}
          renderGradient={gradientId => (
            <radialGradient id={gradientId} cx="0" cy="0" r="1" gradientTransform="rotate(37.089 -578.562 990.449) scale(579.445 668.192)" gradientUnits="userSpaceOnUse">
              <stop stop-color="#fff" stop-opacity="0" />
              <stop offset="1" stop-color="#00FFC2" />
            </radialGradient>
          )}
        />

        <BgShapeColor
          gradientId="work-with-shape-2"
          className={cn(styles.bhShape2)}
          width="1127"
          height="1052"
          renderPath={fill => (
            <path
              fill={fill}
              fillRule="evenodd"
              d="M803.003 179.628c-42.832-30.58-77.303-76.338-128.425-88.84-51.185-12.519-103.65 30.717-155.135 19.491C428.181 90.382 357.671-6.151 264.57 1.394c-83.901 6.8-162.687 71.895-202.679 145.964-40.112 74.291-1.725 166.376-11.255 250.265-9.427 82.983-68.541 163.629-44.864 243.72 23.66 80.029 119.538 113.561 170.113 179.944 54.158 71.087 53.565 199.643 139.014 225.813 91.161 27.92 168.752-93.663 263.684-102.477 81.335-7.552 172.204 107.367 235.796 56.097 75.005-60.47-18.994-210.17 44.831-282.342 61.137-69.132 244.77 21.764 265.2-68.234 21.94-96.629-155.79-126.404-200.999-214.577-24.814-48.398 31.5-111.953 8.347-161.167-22.937-48.754-84.904-63.465-128.755-94.772Z"
              clipRule="evenodd"
            />
          )}
          renderGradient={gradientId => (
            <radialGradient id={gradientId} cx="0" cy="0" r="1" gradientTransform="rotate(37.089 -578.562 990.449) scale(579.445 668.192)" gradientUnits="userSpaceOnUse">
              <stop stop-color="#fff" stop-opacity="0" />
              <stop offset="1" stop-color="#00FFC2" />
            </radialGradient>
          )}
        />
      </div>

      <div className={cn('section', styles.acquanitedBlock)}>
        <div className={cn(styles.titleContainer)}>
          <p className="title">
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
