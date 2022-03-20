import * as React from 'react';
import cn from 'classnames';

import { CardTop } from './CardTop';
import { CardBottom } from './CardBottom';

import promLogo from '../../../images/logo/prom.png';
import indevLogo from '../../../images/logo/indev.png';
import trueLogo from '../../../images/logo/true-ad.png';

import styles from './WorkExperience.module.css';

export const WorkExperience: React.FC = () => {
  return (
    <div className={cn('section', styles.workExperience)}>
      <h2 className={styles.title}>
       Work experience 
      </h2>
      <p className={styles.subtitle}>
        Occupation and range of work description
      </p>

      <div>
        <div className={styles.cardContainer}>
          <CardTop
            workTitle="Product Designer @ prom.ua"
            time="🗓 01/10/2020  — now"
            description="Have been closely cooperating with Rozetka and Prom+ teams. Took part in marketplace redesign, worked on product card, product listings, design system creation and documentation maintenance"
            logoImg={promLogo}
            url="https://prom.ua/"
          />

          <CardBottom>
            <p className={styles.listTitle}>Assignments:</p>
            <ul className={styles.list}>
              <li>Task estimation</li>
              <li>A/B testing</li>
              <li>Scrum/Kanban basis</li>
              <li>Interview script development</li>
              <li>Forming and working on hypotheses</li>
              <li>Interview digitization</li>
              <li>UI kit development</li>
              <li>Transcribation</li>
              <li>Research wall archetype identification</li>
              <li>Design system development</li>
              <li>Interaction with multiple project managers</li>
              <li>Testing hypotheses' viability</li>
              <li>Working with different marketplace areas</li>
              <li>Customer journey map development</li>
            </ul>
          </CardBottom>
        </div>

        <div className={styles.cardContainer}>
          <CardTop
            workTitle="UX/UI Designer @ indevlab"
            time="🗓 12/01/19   — 01/10/20"
            description="Whilst cooperating with IDL I've been working with Kyivstar, LG, Parimatch, Dato Batono. Took part in DoctorOnline app development and designed house bills payment system from landing to admin panel"
            logoImg={indevLogo}
            url="https://indevlab.com/"
          />

          <CardBottom>
            <p className={styles.listTitle}>Assignments</p>
            <ul className={styles.list}>
              <li>UI/UX audit</li>
              <li>UI/UX design [web/app]</li>
              <li>Basic analytics interaction</li>
              <li>Interaction with developers</li>
              <li>Interaction with marketing department</li>
              <li>UI kit creation</li>
              <li>Framework design</li>
              <li>Project estimation</li>
              <li>Prototyping</li>
              <li>Design of marketing materials</li>
              <li>Readymade products improvement</li>
              <li>Design QA</li>
              <li>Improving the products on the development stage</li>
              <li>Interaction with multiple project managers simultaneously</li>
            </ul>
          </CardBottom>
        </div>

        <div className={styles.cardContainer}>
          <CardTop
            workTitle="JuniorUX/UI Designer @true-ag"
            time="🗓 03/11/17   — 09/01/19  "
            description="Had a chance to work with Bosh, Skymall, Makita and Must Have as well
as to work on the famous movie festival Molodist-48"
            logoImg={trueLogo}
            url="https://true-ag.com/"
          />

          <CardBottom>
            <p className={styles.listTitle}>Assignments</p>
            <ul className={styles.list}>
              <li>Banners creation</li>
              <li>Mutual briefing with clients</li>
              <li>Concepts and drafts design</li>
              <li>Website prototyping</li>
              <li>Hypothesis discussions in a team</li>
              <li>Creation of design processes</li>
              <li>Design review and improvements</li>
              <li>Brandbooks creation</li>
              <li> Maintaining websites</li>
              <li>Ads creatives</li>
              <li>Experience in Adobe Illustrator</li>
              <li>Icons creation</li>
              <li>Communication Cinema4D</li>
              <li>Communication with stakeholders</li>
              <li>References collection</li>
            </ul>
          </CardBottom>
        </div>
      </div>
    </div>
  );
}
