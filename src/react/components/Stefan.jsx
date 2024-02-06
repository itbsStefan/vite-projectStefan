//rafce import React from 'react' # ES7+ React/Redux/React-Native snippets
// 

const variable  = "Stefan";
//const Stefan = (props) => { // {props.name} {props.age} 
const Stefan = ({age,name}) => {
  return (
    <>
    <div>Stefan {variable} {name} {age} </div>
    </>
  )
}

export default Stefan;
