import * as React from 'react';
import cn from 'classnames';

// import { Button } from '../../Button';

import more19Logo from '../../../images/logo/more-19.png';
import somethingLogo from '../../../images/logo/something.png';
import indevLogo from '../../../images/logo/indev.png';
import eLogo from '../../../images/logo/e.png';
import domLogo from '../../../images/logo/dom.png';
import interkassaLogo from '../../../images/logo/interkassa.png';
import malvinaLogo from '../../../images/logo/malvina.png';

import styles from './Card.module.css';
import lastStyl from './LastCard.module.css';

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

interface iLastCardProps {
  title: string;
  subtitle: string;
}

export const LastCard: React.FC<iLastCardProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className={cn(styles.card, lastStyl.lastCard)}>
      <div className={cn(styles.elipse, styles.blue)}/>
      <div className={cn(styles.elipse, styles.red)}/>

      <div className={styles.left}>
        <div className={styles.infoBlock}>
          <img
            className={styles.logoImg}
            src={more19Logo}
            alt={title} 
          />

          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </div>
      </div>

      <div
        className={lastStyl.right}
      >
        {
          logos.map(({ logoImg, url
}) => (
            <a key={logoImg} href={url}>
              <img
                className={cn(lastStyl.logoImg)}
                src={logoImg}
              />
            </a>
          ))
        }
      </div>
    </div>
  );
}
