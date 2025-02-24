import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import { useState } from 'react'
import RollDice from './RollDice'
const Gameplay = () => {
  const [selectedNum,setSelectedNum] = React.useState()
  const [random, setRandom] = useState(1)
  const [score, setScore] = useState(0)
  const [error, setError] = useState()
  
 
  const toggle = () => {
    setScore(0)
  }

   
  const dice =()=>{
    

    if(!selectedNum) {
      setError("You have not Selected any number")
      return
    };
   

    const newRandom = Math.floor(Math.random()*6)+1;
    setRandom(newRandom)
    console.log(newRandom)

    if(selectedNum=== newRandom){
      setScore((prev) => prev+newRandom)}
      else{
        setScore((prev) => prev-2)
      }

      setSelectedNum(null)
  }

  
  return (
    <GameplayContainer>
    <div className="top">
      <TotalScore score={score}/>
      <NumberSelector   setError={setError} selectedNum={selectedNum } setSelectedNum={setSelectedNum} error={error}/>
      </div>
     <div className="rolldice">
     <RollDice random={random} roll={dice} toggle={toggle}/>
     </div>
     
    </GameplayContainer>
  )
}

const GameplayContainer = styled.div`
height: 100vh;
.top{
display: flex;
justify-content: space-around;
margin-top: 60px;
}
.rolldice{
display: flex;
justify-content: center;
align-items: center;
margin-top: 60px;
}
`

export default Gameplay