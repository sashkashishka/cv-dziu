import * as React from 'react';
import cn from 'classnames';

import bubbleGc from '../../images/bubbles/buble-gc.png';
import mainBg from '../../images/bg-shapes/main.svg';
import closeIcon from '../../icons/close.svg';

import { Button } from '../Button';

import { useOnScreen } from '../../hooks/useOnScreen';
import { useSessionStorage } from '../../hooks/useSessionStorage';

import styles from './AppointmentPopup.module.css';

export const AppointmentPopup: React.FC = () => {
  const { ref, isOnScreen } = useOnScreen<HTMLDivElement>({
    init: false,
    once: true,
    rootMargin: '64px',
  });

  const [shown, setShown] = useSessionStorage('popup-shown', false);

  return (
    <div>
      <div className={styles.line} ref={ref} />
      {
        isOnScreen && !shown && (
          <div className={styles.popup}>
            <div
              className={cn(styles.bg)}
            >
              <div
                className={cn(styles.bgBlur)}
              />

              <img src={mainBg} alt="" />
            </div>


            <div className={styles.inner}>
              <img src={bubbleGc} alt="" />

              <div className={styles.textContainer}>
                <p className={styles.title}>
                  Interested?
                </p>

                <p className={styles.subtitle}>
                  Let's make an appointment and discuss the details
                </p>
              </div>

              <Button
                variant="purple-round"
                onClick={() => {
                  window.open('https://calendar.google.com/calendar/u/0/r/eventedit?state=%5Bnull%2Cnull%2Cnull%2Cnull%2C%5B13%5D%5D', '_blank');
                }}
              >
                Make appointment
              </Button>

              <img
                className={styles.closeIcon}
                src={closeIcon}
                alt=""
                onClick={() => {
                  setShown(true);
                }}
              />
            </div>
          </div>
        )
      }
    </div>
  );
}
