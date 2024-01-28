//rafce import React from 'react'

let variable  = "ibex-code";
//const Welcome = (props) => { // {props.name} {props.age}
console.log("KlasseVariableWelcome: ", variable); 

const Welcome = ({age,text,name}) => {
  variable += " +";
  // console.log("für jedes verwenden von Welcome ein Punkt ", variable); 
  return (
    <>
    <div>Welcome {name} {age} {text} {variable} </div>
    </>
  )
}

const Display = (props) => {return (
  <div>Display {variable} {props.alter} {props.name} {props.zweiteparameter} <b>{props.text}</b></div>
)}

export default Welcome; 
export {Display};
