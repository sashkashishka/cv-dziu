import * as React from 'react';
import cn from 'classnames';

import { DownloadCV } from '../../DownloadCV';

import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <div className={cn('section', styles.footer)}>
      <h2 className={styles.title}>
        Давайте пообщаемся 😊
      </h2>

      <a className={styles.phoneLink} href="tel:+380 (73) 101-72-56">+380 (73) 101-72-56</a>

      <div className={styles.linkContainer}>
        <a href="https://t.me/Alex_SayDz">Telegram</a>
        <a href="https://www.linkedin.com/in/aleksei-dziubak-b9433a178/">LinkedId</a>
        <a href="mailto:randomtext95@gmail.com">Почта</a>
      </div>

      <DownloadCV />
    </div>
  );
}
