//rafce import React from 'react'

let variable  = "Welcome-Code-Block";
//const Welcome = (props) => { // {props.name} {props.age}
console.log("KlasseVariableWelcome: (Anzahl + zeigt die Aufrufe von Welcome.renderReturn())", variable); 


const Welcome = ({age,text,name}) => {
  variable += " +";
  // console.log("für jedes verwenden von Welcome ein Punkt ", variable); 

  function justLog() {
    console.log("Welcome justLog: ",age, text,name);
  }
  
  function handleClick(event={},text) {
    console.log("Welcome handleClick mit text:",text); 
    const e = document.getElementById('mainheadline')
    if(e)
      e.hidden=true;
  }

  //handleClick({},text)  
  console.log(variable)
  return (
    <>
    <div
    onClick={(event) => {
      handleClick(event,text) // ,justLog()
    }}
    >Welcome {name} {age} {text}</div>
    </>
  )
}

export default Welcome; 

