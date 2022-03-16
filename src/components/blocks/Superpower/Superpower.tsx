import * as React from 'react';
import cn from 'classnames';

import styles from './Superpower.module.css';

export const Superpower: React.FC = () => {
  return (
    <div className={cn('section', styles.superpower)}>
      <h2 className={styles.title}>
        Cуперсила
      </h2>

      <div>
        <div className={styles.skillBlock}>
          <p className={styles.listTitle}>Хард</p>
          <ul className={styles.list}>
            <li>Взаимодействие с UX аналитикой</li>
            <li>Разработка CJM/Блок-схем</li>
            <li>Юзабилити и A / B-тестирование</li>
            <li>Создание roadmap</li>
            <li>Вайрфрейминг и прототипирование</li>
            <li>Проведение исследований</li>
            <li>Создание и поддержание документации</li>
            <li>Дизайн интерфейса web/app</li>
            <li>Разработка UIkit/Дизайн системы</li>
            <li>Интервью с пользователями</li>
          </ul>
        </div>

        <div className={styles.skillBlock}>
          <p className={styles.listTitle}>Софт</p>
          <ul className={styles.list}>
            <li>Гибкость и изменение стратегии при форс-мажорных обстоятельствах</li>
            <li>Ответственность и доведение работы до логического конца</li>
            <li>Пристальное внимание к деталям и мелочам</li>
            <li>Критическое мышление</li>
            <li>Полный анализ сути вопроса и поиск оптимального к задаче решения</li>
            <li>Планирование и организация рабочего времени (time management)</li>
            <li>Обоснованое и осмысленное принятие продуктовых решений</li>
            <li>Продуктовая стратегия</li>
          </ul>
        </div>

        <div className={styles.skillBlock}>
          <p className={styles.listTitle}>Инструменты работы</p>
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
            <li>Jira & Confluence</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
