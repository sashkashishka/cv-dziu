import * as React from 'react';

import styles from './CardBottom.module.css';

export const CardBottom: React.FC = ({ children }) => {
  return (
    <div className={styles.cardBottom}>
      {children}
    </div>
  );
}
