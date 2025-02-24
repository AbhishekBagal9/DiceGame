import React from 'react'
import styled from 'styled-components'
const Startgame = ({toggle}) => {
  return (
   <Main>
    <div className='flex'>
    <div>
        <img src="/images/dices 1.png" alt="" />
    </div>
    <div className='heading'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
    </div>
    </div>
    </Main>
  )
}

const Main = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

.heading{
display: flex;
flex-direction: column;
align-items: end;
gap: 5px;
}

.flex{
display: flex;
margin:auto auto;
align-items: center;
justify-content: center;
max-width: 1182px;
height: 522px;
}

.flex h1{
    font-size: 96px;
    font-weight: 700;
    color: #000000;
    white-space: nowrap;
    }
`
const Button = styled.button`
width: 220px;
height: 44px;
border-radius: 5px;
padding: 10px 18px;
background-color: #000000;
color: #ffffff;
font-size: 16px;
font-weight: 600;
border: none;
cursor: pointer;
transistion: all 0.5s ease-in;
&:hover{
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    transistion: all 0.3s ease-in;
}

`
export default Startgame