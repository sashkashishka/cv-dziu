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
       Опыт работы 
      </h2>
      <p className={styles.subtitle}>
        Род деятельности, описание диапазона работы
      </p>

      <div>
        <div className={styles.cardContainer}>
          <CardTop
            workTitle="Product Designer @ prom.ua"
            time="🗓 01/10/2020  — по сей день"
            description="За время работки тестно сотрудничали с командой Rozetka и Prom+.Учавствовал в редизайне маркетплейса работал над карточкой товара,выдачей в листинге, созданием Дизайн системы и ведении документации."
            logoImg={promLogo}
            url="#https://prom.ua/"
          />

          <CardBottom>
            <p className={styles.listTitle}>Задачи</p>
            <ul className={styles.list}>
              <li>Эстимация задач</li>
              <li>Проведение А/Б тестирование</li>
              <li>Выполнение по спринтам/канбан</li>
              <li>Cоставления скрипта интервью.</li>
              <li>Выдвижение гипотез и работа с ними</li>
              <li>Выполнение по канбану</li>
              <li>Оцифровка интервью</li>
              <li>Создание UI kit</li>
              <li>Транскрибация</li>
              <li>Research wall определение архетипов</li>
              <li>Разработка дизайн-системы</li>
              <li>Взаимодействие с несколькими PM</li>
              <li>Проверка гипотез на жизнеспособность</li>
              <li>Работа с разными частями плейса</li>
              <li>Выполнение по канбану</li>
              <li>цифровка интервью</li>
              <li>Выдвижение гипотез и работа с ними</li>
              <li>Проверка гипотез на жизнеспособность</li>
              <li>Разработка с Cutomer jorney map.</li>
              <li>Разработка customer case</li>
              <li>Разработка с Cutomer jorney map.</li>
              <li>Создание документации</li>
            </ul>
          </CardBottom>
        </div>

        <div className={styles.cardContainer}>
          <CardTop
            workTitle="UX/UI Designer @ indevlab"
            time="🗓 12/01/19   — 01/10/20"
            description="За время сотрудничества с IDL компаниями Kievstar, LG, Parimatch, Dato Batono, Работал над приложением DoctorOnline, а так же проектировал сервис по оплате коммунальных платежей, начиная от лендинга и заканчивая админ панелью."
            logoImg={indevLogo}
            url="https://indevlab.com/"
          />

          <CardBottom>
            <p className={styles.listTitle}>Задачи</p>
            <ul className={styles.list}>
              <li>Аудит UI/UX </li>
              <li>Дизайн UI/UX [ web/app ]</li>
              <li>Базовая работа с аналитикой</li>
              <li>Взаимодействие с разработкой</li>
              <li>Взаимодействие с маркетингом</li>
              <li>Создание UI kit</li>
              <li>Проработка блок-схем</li>
              <li>Просчеты проектов </li>
              <li>Прототипирование </li>
              <li>Дизайн рекламной продукции</li>
              <li>Улучшение готовых продуктов</li>
              <li>Проверка дизайна</li>
              <li>Улучшение продукта в разработке</li>
              <li>Улучшение продукта в разработке</li>
              <li>Взаимодействие с несколькими PM</li>
            </ul>
          </CardBottom>
        </div>

        <div className={styles.cardContainer}>
          <CardTop
            workTitle="JuniorUX/UI Designer @true-ag"
            time="🗓 03/11/17   — 09/01/19  "
            description="За время работы поработал компаниями Bosh, именитым кинофестивалем “Молодість 48” SkyMall а также поработал с Makita, Must Have."
            logoImg={trueLogo}
            url="https://true-ag.com/"
          />

          <CardBottom>
            <p className={styles.listTitle}>Задачи</p>
            <ul className={styles.list}>
              <li>Отрисовка баннеров</li>
              <li>Встречный брифинг клиентов</li>
              <li>Разработка коцептов и ранних драфтов</li>
              <li>Прототипирование и тестирование на пользователях</li>
              <li>Разработка сайтов</li>
              <li>Разработка интернет-магазинов</li>
              <li>ПРазработка корп.сайтов</li>
              <li>Просчеты проектов </li>
              <li>Прототипирование </li>
              <li>Обсуждение гипотез, работа в команде</li>
              <li>Ревью дизайна и улучшение</li>
              <li>Разработка брендбуков</li>
              <li>Поддержка сайтов</li>
              <li>Улучшение продукта в разработке</li>
              <li>Поиск оптимального решения</li>
            </ul>
          </CardBottom>
        </div>
      </div>
    </div>
  );
}
