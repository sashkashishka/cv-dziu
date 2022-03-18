import * as React from 'react';
import cn from 'classnames';

import { Button } from '../../Button';
import { DownloadCV } from '../../DownloadCV';

import { Card } from './Card';

import behanceIcon from '../../../icons/behance.svg';
import dribbleIcon from '../../../icons/dribble.svg';

import styles from './Main.module.css';

export const MainBlock: React.FC = () => {
  return (
    <div className={cn('section', styles.mainBlock)}>
      <nav className={cn(styles.navTop)}>
        <p className={styles.navTopTitle}>
          Dziubak Oleksiy
        </p>

        <div className={styles.navTopLinkContainer}>
          <a href="https://t.me/Alex_SayDz">Telegram</a>
          <a href="https://www.linkedin.com/in/aleksei-dziubak-b9433a178/">LinkedId</a>
          <a href="mailto:randomtext95@gmail.com">Почта</a>
        </div>

        <a href="tel:+380 (73) 101-72-56">+380 (73) 101-72-56</a>
      </nav>

      <section className={cn(styles.main)}>
        <div className={styles.mainLeft}>
          <p className={cn(styles.mainTitle, styles.mainTitleDesktop)}>
            Я продуктовый дизайнер с полезным опытом
          </p>
          <p className={cn(styles.mainTitle, styles.mainTitleMobile)}>
            Я продуктовый дизайнер.
          </p>
          <p>
            Валидирую гипотезы и превращаю их в деньги.
          </p>
          <DownloadCV
            className={styles.mainLeftButton}
          />
        </div>

        <div className={styles.mainRight}>
          <div className={styles.sliderContainer}>
            <Card
              title="Профиль Behance"
              url="be.net/randomtext2cb5"
              icon={behanceIcon}
              hasAwards
            />

            <Card
              title="Профиль Dribbble"
              url="dribbble.com/randomtext"
              icon={dribbleIcon}
            />
          </div>

          <div className={styles.sliderCaption}>
            В кейсах детально расписан процесс.
          </div>

        </div>
      </section>

      <nav className={cn(styles.navBottom)}>
        <a href="https://t.me/Alex_SayDz">Telegram</a>
        <a href="https://www.linkedin.com/in/aleksei-dziubak-b9433a178/">LinkedIn</a>
        <a href="mailto:randomtext95@gmail.com">Почта</a>
      </nav>
    </div>
  );
};
