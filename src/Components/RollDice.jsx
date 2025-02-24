import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
const RollDice = ({random, roll,toggle,isRolling}) => {
const [showRules, setShowRules] = useState(false)

  
  return (
    <RollDiceContainer>
         <div className="roll">
            <img onClick={roll} src={`/Dices/dice_${random}.png`} alt="" />
            <p>Click on Dice to roll</p>
         </div>
         <Buttons>
          <button className='reset' onClick={toggle}>Reset Score </button>
          <button onClick={()=> setShowRules(true)} className='Rules'>Show Rules</button>
         </Buttons>
         {showRules ? (
          <div className="rules" >
            <button className='delete' onClick={()=>setShowRules(false)}>X</button>
            <h1>How to play dice game</h1>
            <div>
            <p>1) Select any number</p>
            <p>2) click on dice image</p>
            <p>3) after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>4) if you get wrong guess then  2 point will be dedcuted </p>
            </div>
          </div>):null
          }
    </RollDiceContainer>
  )
}

const RollDiceContainer = styled.div`

.roll{
display: flex;
flex-direction: column; 
align-items: center;
gap: 20px;
font-size: 24px;
font-weight: 500;
}
.roll img{
cursor: pointer;}

.rules{
position:relative;
border:1px solid black;
border-radius:25px;

.delete{
position:absolute;
right:0;
top:0;
margin:15px 25px;
background-color:red;
cursor: pointer;
border:none;
}
gap:24px;
background-color: #FBF1F1;
display: flex;
flex-direction: column;
padding: 20px;
margin-top: 24px;

h1{
font-size: 24px;
text-align: center;
font-weight: 700;}
}
p{
fontsize: 16px;
font-weight: 500;
}
`
const Buttons = styled.div`
margin-top: 24px;
display: flex;
gap: 24px;
flex-direction: column;
jusiify-content: center;
align-items: center;
.reset{
display: flex;
align-items: center;
justify-content: center;
width: 220px;
height: 44px;
border-radius: 5px;
padding: 10px 18px;
color: #000000;
background-color: white;
border: 1px solid #000000;
font-size: 16px;
font-weight: 600;
cursor: pointer;
}
.Rules{
display: flex;
align-items: center;
justify-content: center;
width: 220px;
height: 44px;
border-radius: 5px;
padding: 10px 18px;
color: white;
background-color: black;
border:none;
font-size: 16px;
font-weight: 600;
cursor: pointer;
}
`

export default RollDice