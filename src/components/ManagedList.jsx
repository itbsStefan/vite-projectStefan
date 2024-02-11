import { useState, useRef } from 'react';



const ListItem = ({liste,listItemClick,flags}) => {

  const [actualIndex , setActualIndex] = useState(-1);


return (
<>
    {liste.map((listenElementText,index) => ( // singel line statement ohne return jsx Code
    <li
        onClick={() => {
            listItemClick(index,flags) // ,justLog()
        }}
        className={actualIndex === index ? "list-group-item active" : "list-group-item"} 
        key={listenElementText+index}
    >
        {listenElementText}
    </li>
    ))}{/*endeList.map()/* HTML Kommentar oder auch nicht */}
</>
)} //ListItem

    
const OutputList = ({id,liste,listItemClick,flags}) => {


return (

<ul className='output-list' id={id+'-LISTE'}>
    <ListItem liste={liste} listItemClick={listItemClick} flags={flags}/>
    {/* HTML Kommentar oder auch nicht */}
</ul>

)} //OutputList


const ListInput = ({id,liste,setTodoliste}) => {
  // const addSubmitt = useRef(true);
  const inputRef =useRef(null)
  const [addSubmittdis , setAddSubmittdis] = useState(true);
  const internerwert = useRef(null);

  function onChangeInput(e){
      console.log("onChangeInput Eventvalue:",addSubmittdis,"|",internerwert.current,"|", e.target.value);
      internerwert.current = e.target.value
      if(internerwert.current.length>0){
        if(addSubmittdis)
          setAddSubmittdis(false)
      }else{
        if(!addSubmittdis)
          setAddSubmittdis(true)
      }
        //addSubmitt.current = false
  }
  
  function addTask(event){
    console.log(internerwert.current,"button addTask Clicked",event);
    //setNeueAufgabe(internerwert.current)
    setTodoliste(liste.concat(internerwert.current))
/*     const na = (liste, index, newItem) => [
      ...arr.slice (0, index),
      newItem,
      ...arr.slice (index)
    ]
    console.log(na) */
    inputRef.current.value = ""
    internerwert.current = ""
    setAddSubmittdis(true)
    inputRef.current.focus()
  }

  return (
  <div>
      <input id="neueAufgabe"
      ref = {inputRef} 
      type="text" 
      onChange={(e) => {
          onChangeInput(e)//,laenge(e) // ,onChange={e => setNewContent(e.target.value)} 
      }}  
      placeholder="neue Aufgabentext"
      />
      <br/>
      <button id="addTaskButton" disabled ={addSubmittdis}
      onClick={() => {
          addTask()
          //,SetNewTask() // ,justLog()
      }}
      >neue Aufgabe
      </button>
      <hr/>
  </div>
)} //ListInput

const ManagedList = ({id,liste,setTodoliste}) => {
  
  const [neueAufgabe , setNeueAufgabe] = useState("");

  function listItemClick(index,flags){
      console.log("es wurde ein Listenelement angeklickt",liste[index])
      const na = liste.filter ((elem) => elem != liste[index]);
      setTodoliste(na)
  }
  // function setNeueAufgabe(text){
  //   setNeueAufgabe(text)
  //   console.log("button addTask Clicked",text);
  // }
      
return (/* HTML Kommentar oder auch nicht */
<>
    <ListInput liste={liste} setTodoliste={setTodoliste}/>
    <OutputList id={id} liste={liste} listItemClick={listItemClick} flags={"nix"}/>
</>
)} //ManagedList

export default ManagedList 
export {ListItem,ListInput,OutputList};
