import * as React from 'react';
import cn from 'classnames';

import shadowArt from '../../../images/shadow-art/last-card.png';

import lastCardBg from '../../../images/bg-shapes/last-card.svg';

import somethingLogo from '../../../images/logo/something.png';
import indevLogo from '../../../images/logo/indev.png';
import eLogo from '../../../images/logo/e.png';
import domLogo from '../../../images/logo/dom.png';
import interkassaLogo from '../../../images/logo/interkassa.png';
import malvinaLogo from '../../../images/logo/malvina.png';

import styles from './LastCard.module.css';
import cs from './Card.module.css';

const logos = [
  {
    logoImg: somethingLogo,
    url: 'https://datobatono.com/',
  },
  {
    logoImg: indevLogo,
    url: 'https://indevlab.com/',
  },
  {
    logoImg: eLogo,
    url: 'https://www.eve.ua/',
  },
  {
    logoImg: domLogo,
    url: '#',
  },
  {
    logoImg: interkassaLogo,
    url: '#',
  },
  {
    logoImg: malvinaLogo,
    url: 'https://malvinabeauty.ru/',
  },
];

export const LastCard: React.FC = () => {
  return (
    <div
      className={cn(styles.lastCard)}
    >
      <div
        className={cn(cs.infoBlock, styles.infoBlock)}
        style={{
          '--card-bg': `url(${lastCardBg})`,
        } as React.CSSProperties}
      >
        <div className={cs.textContainer}>
          <p className={cs.title}>There's more</p>
          <p className={cs.subtitle}>I've mentioned the main/largest projects I worked on. We may discuss further upon meetingin Ukraine</p>
        </div>

        <a
          className={cs.buttonLink}
          href="#"
          target="_blank"
          rel="noreferrer"
        >
        </a>
      </div>

      <div className={styles.desktopTexContainer}>
        <p className={styles.title}>There's more</p>
        <p className={styles.subtitle}>I've mentioned the main/largest projects I worked on. We may discuss further upon meetingin Ukraine</p>
      </div>

      <div
        className={cn(styles.artShadow)}
      >
        <img src={shadowArt} alt="" />
      </div>

      <div
        className={styles.logos}
      >
        {
          logos.map(({ logoImg, url }) => (
            <a
              key={logoImg}
              className={cn(styles.logoImg)}
              href={url}
              target="_blank"
            >
              <img
                src={logoImg}
              />
            </a>
          ))
        }
      </div>
    </div>
  );
}
