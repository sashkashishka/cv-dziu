import * as React from 'react';
import cn from 'classnames';

import footerBg from '../../../images/bg-shapes/footer.svg';
import textMask from '../../../images/text-bg/footer.png';

import dziuSmall from '../../../images/dziu-small.png';
import qrCode from '../../../images/qr.png';

import { DownloadCV } from '../../DownloadCV';

import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <div className="section">
      <div className={cn(styles.footer)}>
        <div
          className={cn(styles.bgContainer)}
        >
          <div
            className={cn(styles.bgBlur)}
          />

          <img src={footerBg} alt="" />
        </div>


        <div className={styles.topContent}>
          <h2
            className={cn(styles.title, 'text-mask')}
            style={{
              '--text-mask-url': `url(${textMask})`,
            } as React.CSSProperties}
          >
            Let's chat
          </h2>

          <a className={styles.phoneLink} href="tel:+380 (73) 101-72-56">+380 (73) 101-72-56</a>
        </div>

        <div className={cn(styles.avatar)}>
          <img src={dziuSmall} alt="" />
        </div>

        <img className={styles.qrCode} src={qrCode} alt="" />

        <DownloadCV />

        <nav className={cn(styles.navBottom)}>
          <a href="https://www.linkedin.com/in/aleksei-dziubak-b9433a178/">LinkedIn</a>
          <a href="mailto:randomtext95@gmail.com">Mail</a>
          <a href="https://t.me/Alex_SayDz">Telegram</a>
        </nav>
      </div>
    </div >
  );
}
