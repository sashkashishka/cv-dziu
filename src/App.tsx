
import { MainBlock } from './components/blocks/Main';
import { WorkedWith } from './components/blocks/WorkedWith';
import { Superpower } from './components/blocks/Superpower';
import { WorkExperience } from './components/blocks/WorkExperience';
import { Footer } from './components/blocks/Footer';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <MainBlock />
      <WorkedWith />
      <Superpower />
      <WorkExperience />
      <Footer />
    </div>
  )
}

export default App
