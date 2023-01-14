import * as React from 'react';
import cn from 'classnames';

import { Card } from './Card';

import mainBg from '../../../images/bg-shapes/main.svg';
import textMask from '../../../images/text-bg/main.png'; 

import behanceIcon from '../../../icons/behance.svg';
import dribbleIcon from '../../../icons/dribble.svg';

import styles from './Main.module.css';

export const MainBlock: React.FC = () => {
  return (
    <div className="section">
      <div className={cn(styles.mainBlock)}>
        <div
          className={cn(styles.bgContainer)}
        >
          <div
            className={cn(styles.bgBlur)}
          />

          <img src={mainBg} alt="" />
        </div>


        <nav className={cn('section', styles.navTop)}>
          <a href="https://www.linkedin.com/in/aleksei-dziubak-b9433a178/">LinkedIn</a>
          <a href="mailto:randomtext95@gmail.com">Mail</a>
          <a href="https://t.me/Alex_SayDz">Telegram</a>
        </nav>

        <section className={cn('section', styles.main)}>
          <div className={styles.mainLeft}>
            <p
              className={cn('title', 'text-mask')}
              style={{
                '--text-mask-url': `url(${textMask})`
              } as React.CSSProperties}
            >
              Hey, I’m Oleksiy, a product designer with 7 years of experience
            </p>
            <p className="subtitle">
              Not drawing an interface, but designing, validating hypotheses and turning them into money
            </p>
          </div>

          <div className={styles.mainRight}>
            <div className={styles.sliderContainer}>
              <Card
                title="Behance profile"
                url="be.net/randomtext2cb5"
                icon={behanceIcon}
                type="behance"
              />

              <Card
                title="Dribble profile"
                url="dribbble.com/randomtext"
                icon={dribbleIcon}
                type="dribble"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
