import * as React from 'react';
import cn from 'classnames';

import { CardTop } from './CardTop';
import { CardBottom } from './CardBottom';

import promBgCard from '../../../images/bg-shapes/prom-card.png';
import indevBgCard from '../../../images/bg-shapes/indevlab-card.png';
import trueAgBgCard from '../../../images/bg-shapes/true-ag-card.png';

import promArtShadow from '../../../images/shadow-art/prom.png';
import indevArtShadow from '../../../images/shadow-art/indevlab.png';
import trueAgArtShadow from '../../../images/shadow-art/true-ag.png';

import promLogo from '../../../images/logo/prom.svg';
import indevLogo from '../../../images/logo/indev.png';
import trueLogo from '../../../images/logo/true-ad.png';

import styles from './WorkExperience.module.css';

export const WorkExperience: React.FC = () => {
  return (
    <div className={cn('section', styles.workExperience)}>
      <h2 className={cn('title', styles.title)}>
        Work experience
      </h2>
      <p className={cn('subtitle', styles.subtitle)}>
        Occupation and range of work description
      </p>

      <div className={styles.cardGrid}>
        <div className={styles.cardContainer}>
          <CardTop
            workTitle="Product Designer @ prom.ua"
            time="🗓 01/10/2020  — now"
            description="Have been closely cooperating with Rozetka and Prom+ teams. Took part in marketplace redesign, worked on product card, product listings, design system creation and documentation maintenance"
            logoImg={promLogo}
            bg={promBgCard}
            artShadow={promArtShadow}
          />

          <CardBottom>
            <ul className={styles.list}>
              <li>Task estimation</li>
              <li>A/B testing </li>
              <li>Scrum/Kanban basis</li>
              <li>Interview script development</li>
              <li>Interview digitization</li>
              <li>UI kit development</li>
              <li>Transcribation</li>
              <li>Research wall archetype identification</li>
              <li>Design system development</li>
              <li>Testing hypotheses' viability</li>
              <li>Forming and working on hypotheses</li>
              <li>Customer journey map development</li>
              <li>Transcribation</li>
              <li>Research wall archetype identification</li>
              <li>Design system development</li>
              <li>Interaction with multiple project managers </li>
              <li>Testing hypotheses' viability</li>
              <li>Working with different marketplace areas</li>
              <li>Brainstorm ideas</li>
              <li>Work on hypotises with Project manager</li>
              <li>Created UX dashboard (Data studio)</li>
              <li>Creating design documentation</li>
              <li>Commenting on the work of junior designers</li>
              <li>Processing feedback from users</li>
            </ul>
          </CardBottom>
        </div>

        <div className={styles.cardContainer}>
          <CardTop
            workTitle="UX/UI Designer @ indevlab"
            time="🗓 12/01/19   — 01/10/20"
            description="Whilst cooperating with IDL I've been working with Kyivstar, LG, Parimatch, Dato Batono. Took part in DoctorOnline app development and designed house bills payment system from landing to admin panel"
            logoImg={indevLogo}
            bg={indevBgCard}
            artShadow={indevArtShadow}
          />

          <CardBottom>
            <ul className={styles.list}>
              <li>UI\UX design [web/app]</li>
              <li>Basic analytics interaction</li>
              <li>Interaction with developers</li>
              <li>Interaction with marketing department</li>
              <li>Interaction with multiple project managers simultaneously</li>
              <li>Read documentation</li>
              <li>Framework design</li>
              <li>Project estimation</li>
              <li>Prototyping</li>
              <li>Design of marketing materials</li>
              <li>Design QA</li>
              <li>Improving the products on the development stage</li>
              <li>Junior designer training</li>
              <li>Ideas protection</li>
              <li>Transcribation</li>
              <li>Basic analytics interaction</li>
              <li>Worked with developers</li>
              <li>Search reference for project</li>
              <li>Promotion of ideas</li>
              <li>Project estimation</li>
              <li>Design of marketing materials</li>
              <li>Improving the products on the dev. stage</li>
              <li>Interaction with multiple project simultaneously</li>
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
            bg={trueAgBgCard}
            artShadow={trueAgArtShadow}
          />

          <CardBottom>
            <ul className={styles.list}>
              <li>Work and communication with Art director</li>
              <li>UI\UX design [web/app]</li>
              <li>Corrections on production</li>
              <li>Work on the composition</li>
              <li>Interaction with developers</li>
              <li>Interaction with marketing department</li>
              <li>UI kit development</li>
              <li>Framework development</li>
              <li>Project estimation</li>
              <li>Communication Cinema4D</li>
              <li>Design QA</li>
              <li>Polygraphy materials creation</li>
              <li>Ideas protection</li>
              <li>Ads creatives</li>
              <li>Icons creation</li>
              <li>Maintaining websites</li>
              <li>Worked with developers</li>
              <li>Design review and improvements</li>
              <li>Creation of design processes</li>
              <li>Hypothesis discussions in a team</li>
              <li>Website prototyping</li>
              <li>Concepts and drafts design</li>
              <li>Mutual briefing with clients</li>
              <li>Banners creation</li>
            </ul>
          </CardBottom>
        </div>
      </div>
    </div>
  );
}
