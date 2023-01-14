import * as React from 'react';
import cn from 'classnames';

import textMask from '../../../images/text-bg/superpower.png';

import { AppointmentPopup } from '../../AppointmentPopup/AppointmentPopup';

import styles from './Superpower.module.css';

export const Superpower: React.FC = () => {
  return (
    <div className={cn('section', styles.superpower)}>
      <AppointmentPopup />

      <h2
        className={cn(styles.title, 'text-mask')}
        style={{
          '--text-mask-url': `url(${textMask})`,
        } as React.CSSProperties}
      >
        My superpowers
      </h2>

      <div className={styles.content}>
        <div className={styles.skillBlock}>
          <p className={styles.listTitle}>Hard skills</p>
          <ul className={styles.list}>
            <li>UX analytics interaction</li>
            <li>CJM/Flowchart development</li>
            <li>Scrum/Kanban</li>
            <li>Roadmap creation</li>
            <li>Warframing and prototyping</li>
            <li>Doing research</li>
            <li>Documents development and maintenance</li>
            <li>Web/app interface design</li>
            <li>UI kit/Design system development</li>
            <li>User interviews</li>
          </ul>
        </div>

        <div className={styles.skillBlock}>
          <p className={styles.listTitle}>Soft skills</p>
          <ul className={cn(styles.list, styles.oneCol)}>
            <li>Flexibility and restrateging in case of force-majeur</li>
            <li>Responsibility and purposefulness</li>
            <li>Attention to details</li>
            <li>Critical thinking</li>
          </ul>
        </div>

        <div className={styles.skillBlock}>
          <p className={styles.listTitle}>Software</p>
          <ul className={styles.list}>
            <li>Figma</li>
            <li>Sketch</li>
            <li>Framer</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe XD</li>
            <li>Zeplin</li>
            <li>Miro</li>
            <li>Readymag/Tilda/Wix</li>
            <li>Google Analytics</li>
            <li>Google Data studio</li>
            <li>Notion</li>
            <li>Axure RP</li>
            <li>Balsamiq Mockup</li>
            <li>Principle</li>
            <li>Proto Pie</li>
            <li>Jira & Confluence</li>
            <li>Clickup</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
