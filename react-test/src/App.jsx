import React from 'react'
import Image from './Image'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

function App() {

  console.clear()

  const [state, setState] = React.useState({src: ''})

  const kompA = React.useRef(null)


  function rodzic(){
    console.log('funkcja rodzic')

  }

  return (
    <>
      <Image state={state} setState={setState} />

      <ComponentA rodzic={rodzic} />
      <ComponentB rodzic={rodzic} />

    </>
  )
}

export default App
