import React from 'react'
import styled from 'styled-components'
const TotalScore = ({score}) => {
  return (
   <Scorecontainer>
     <h1>{score}</h1>
     <p>Total Score</p>
   </Scorecontainer>
  )
}


const Scorecontainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 135px;
height: 135px;

h1{
font-size: 100px;
color:#000000;
line-height: 100px;
}
p{
font-size: 24px;
}

`
export default TotalScore;

