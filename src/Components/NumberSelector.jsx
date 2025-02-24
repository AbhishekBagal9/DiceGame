import React from 'react'
import styled from 'styled-components'

const NumberSelector = ({selectedNum,setSelectedNum,error,setError}) => {
    
    const NumberSelectorHandler = (item)=>{
        setSelectedNum(item)
        setError("")
    }
   
    const array = [1,2,3,4,5,6]
    console.log(selectedNum)
  
  return (
    <NumberSelectorContainer>
     <p className='error'>{error}</p>
        <div className="boxes">
         {
            array.map((item, index) => {
                return <Box isSelected={item===selectedNum}  onClick={() => NumberSelectorHandler(item)}  key={index} >{item}</Box>
            })}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
gap:30px;

.boxes{
display: flex;
gap:25px;

}
.error{
    color: red;}
p{
    text-align: end;
    font-size: 24px;
    font-weight: 700;
    
    }
`
const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props)=> (props.isSelected ? 'black' : 'white')};
    color: ${(props)=> (props.isSelected ? 'white' : 'black')};
`
export default NumberSelector