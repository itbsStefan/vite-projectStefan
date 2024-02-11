//rafce import React from 'react'

let variable  = "Welcome-Code-Block";
//const Welcome = (props) => { // {props.name} {props.age}
console.log("KlasseVariableWelcome: ", variable); 


const Welcome = ({age,text,name}) => {
  variable += " +";
  // console.log("für jedes verwenden von Welcome ein Punkt ", variable); 

  function justLog() {
    console.log("Welcome justLog: ",age, text,name);
  }
  
  function handleClick(text) {
    console.log("Welcome handleClick mit text:",text); 
    document.getElementById('mainheadline').hidden=true;
  }
  
  return (
    <>
    <div
    onClick={() => {
      handleClick(text) // ,justLog()
    }}
    >Welcome {name} {age} {text} {variable} </div>
    </>
  )
}

export default Welcome; 

