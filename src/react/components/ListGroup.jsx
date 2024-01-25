import { useState } from "react";


const ListGroup = ({id,liste}) => {
  // hier Javascript
  const [actualIndex , setActualIndex] = useState(-1); //anstelle let = actualInex = -1;
  // console.log("registrierte Variabl ", actualIndex); // in dev doppelte Ausgabe
  function justLog() {
    console.log("justLog: ",id, actualIndex,liste);
  }

  function handleClick(index) {
    console.log("ListGroupClick",id, "Index vorher",actualIndex, "nacher",index); 
    setActualIndex(index);
  }

  justLog();

  //im return einfach HTML schreiben und in {} javascript
  return (

<ul className='list-group'>
  {liste.map((listenElement,index) => ( // singel line statement ohne return jsx Code
    <li
      onClick={() => {
        handleClick(index)
      }}
      className={actualIndex === index ? "list-group-item active" : "list-group-item"} 
      key={listenElement}>
      {listenElement}
    </li>
  ))}{/* HTML Kommentar oder auch nicht */}
</ul>

  );  
};

export default ListGroup;
