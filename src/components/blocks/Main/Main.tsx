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
    <div className={cn(styles.mainBlock)}>
      <nav className={cn('section', styles.navTop)}>
        <p className={styles.navTopTitle}>
          Dziubak Oleksiy
        </p>

        <div className={styles.navTopLinkContainer}>
          <a href="https://t.me/Alex_SayDz">Telegram</a>
          <a href="https://www.linkedin.com/in/aleksei-dziubak-b9433a178/">LinkedIn</a>
          <a href="mailto:randomtext95@gmail.com">Mail</a>
        </div>

        <a href="tel:+380 (73) 101-72-56">+380 (73) 101-72-56</a>
      </nav>

      <section className={cn('section', styles.main)}>
        <div className={styles.mainLeft}>
          <p className={cn(styles.mainTitle, styles.mainTitleDesktop)}>
            I am a product designer with a useful experience
          </p>
          <p className={cn(styles.mainTitle, styles.mainTitleMobile)}>
            I am a product designer
          </p>
          <p>
            Validating hypotheses and turning them into money
          </p>
          <DownloadCV
            className={styles.mainLeftButton}
          />
        </div>

        <div className={styles.mainRight}>
          <div className={styles.sliderContainer}>
            <Card
              title="Профиль Behance"
              url="behance.net/randomtext2cb5"
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
            Case studies include detailed process description
          </div>

        </div>
      </section>

      <nav className={cn('section', styles.navBottom)}>
        <a href="https://t.me/Alex_SayDz">Telegram</a>
        <a href="https://www.linkedin.com/in/aleksei-dziubak-b9433a178/">LinkedIn</a>
        <a href="mailto:randomtext95@gmail.com">Mail</a>
      </nav>
    </div>
  );
};