//rafce import React from 'react'

const variable  = "ibex-code";
//const Welcome = (props) => { // {props.name} {props.age}
console.log("eine Variable: ", variable); 
const Welcome = ({age,text,name}) => {
  return (
    <>
    <div>Welcome {name} {age} {text} {variable} </div>
    </>
  )
}

export default Welcome; 
