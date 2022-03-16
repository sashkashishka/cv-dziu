import { useState } from 'react'
// import './App.css'

import { MainBlock } from './components/blocks/Main';
import { WorkedWith } from './components/blocks/WorkedWith';
import { Superpower } from './components/blocks/Superpower';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainBlock />
      <WorkedWith />
      <Superpower />
    </>
  )
}

export default App
