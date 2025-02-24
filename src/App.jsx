import React from 'react'
import Startgame from './Components/Startgame'
import Gameplay from './Components/Gameplay'
import { useState } from 'react'

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGame = () => {
    setIsGameStarted(a => !a)
  }
  return (
    <div>
     {
      isGameStarted ? <Gameplay/> : <Startgame toggle={toggleGame}/>
     } ;
    </div>
  )
}

export default App


