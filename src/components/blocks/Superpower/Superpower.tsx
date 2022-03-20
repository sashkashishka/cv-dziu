import * as React from 'react';
import cn from 'classnames';

import styles from './Superpower.module.css';

export const Superpower: React.FC = () => {
  return (
    <div className={cn('section', styles.superpower)}>
      <h2 className={styles.title}>
        Superpowers
      </h2>

      <div className={styles.content}>
        <div className={styles.skillBlock}>
          <p className={styles.listTitle}>Hard</p>
          <ul className={styles.list}>
            <li> UX analytics interaction</li>
            <li>CJM/Flowchart development</li>
            <li>Scrum/Kanban</li>
            <li>Roadmap creation</li>
            <li>Warframing and prototyping</li>
            <li>Doing research</li>
            <li>Documents development and maintenance</li>
            <li>Web/app interface design</li>
            <li>UIkit/Design system development</li>
            <li>User interviews</li>
          </ul>
        </div>

        <div className={styles.skillBlock}>
          <p className={styles.listTitle}>Soft</p>
          <ul className={styles.list}>
            <li>Flexibility and restrateging in case of force-majeur</li>
            <li>Full case study and resolving</li>
            <li>Responsibility and purposefulness</li>
            <li>Attention to details</li>
            <li>Critical thinking</li>
            <li> Full case study and resolving</li>
            <li>Self-management and time management</li>
            <li>Reasonable and thoughtful decision-making</li>
            
          </ul>
        </div>

        <div className={styles.skillBlock}>
          <p className={styles.listTitle}>Software</p>
          <ul className={styles.list}>
            <li>Figma</li>
            <li>Sketch</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe XD</li>
            <li>Zeplin</li>
            <li>Miro</li>
            <li>Readymag/Tilda/Wix</li>
            <li>Google Analytics</li>
            <li>Google Docs/Forms/Sheets </li>
            <li>Notion</li>
            <li>Axure RP</li>
            <li>Balsamiq Mockup</li>
            <li>Principle</li>
            <li>Proto Pie</li>
            <li>Jira/Confluence</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
