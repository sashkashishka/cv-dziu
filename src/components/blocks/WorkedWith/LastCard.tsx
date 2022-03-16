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
  },
  {
    logoImg: indevLogo,
  },
  {
    logoImg: eLogo,
  },
  {
    logoImg: domLogo,
  },
  {
    logoImg: interkassaLogo,
  },
  {
    logoImg: malvinaLogo,
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
          logos.map(({ logoImg }) => (
            <img
              key={logoImg}
              className={cn(lastStyl.logoImg)}
              src={logoImg}
            />
          ))
        }
      </div>
    </div>
  );
}
