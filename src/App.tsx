import * as React from 'react';

import { MainBlock } from './components/blocks/Main';
import { WorkedWith } from './components/blocks/WorkedWith';
import { Superpower } from './components/blocks/Superpower';
import { WorkExperience } from './components/blocks/WorkExperience';
import { Footer } from './components/blocks/Footer';

function App() {
  return (
    <React.Fragment>
      <MainBlock />
      <WorkedWith />
      <Superpower />
      <WorkExperience />
      <Footer />
    </React.Fragment>
  )
}

export default App
