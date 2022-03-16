import { useState } from 'react'
// import './App.css'

import { MainBlock } from './components/blocks/Main';
import { WorkedWith } from './components/blocks/WorkedWith';
import { Superpower } from './components/blocks/Superpower';
import { WorkExperience } from './components/blocks/WorkExperience';
import { Footer } from './components/blocks/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainBlock />
      <WorkedWith />
      <Superpower />
      <WorkExperience />
      <Footer />
    </>
  )
}

export default App
