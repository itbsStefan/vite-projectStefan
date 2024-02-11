import { useState } from "react";
let auswahl = "varAuswahl";
let variable = "ListGroup Variable TEXT";

const ListGroup = ({id,liste,appAuswahlValues}) => { //idVarListenname einArray objekt mit IDprop und ausgewälten Wert der liste
  // hier Javascript
  const [actualIndex , setActualIndex] = useState(-1); //anstelle let = actualInex = -1;
  // console.log("registrierte Variabl ", actualIndex); // in dev doppelte Ausgabe
  
  function justLog() {
    console.log("justLog: ",id, actualIndex,liste);
  }

  function handleClick(i,appstatus) {
    console.log("ListGroupClick",id, "Index vorher",actualIndex, "nacher",i ,liste[i]); 
    document.getElementById('mainheadline').hidden=true;
    setActualIndex(i);
    auswahl += " @" + liste[i];
    appstatus[id]= i;
    console.log(appstatus,"gewählt wurde:"+liste[i]);
  }
  const z = document.getElementById('mainheadline');
  //.innerText.length;
  //justLog(); 
  function x(y,i){
    console.log("als function x",y,i);
  }// anstelle von x  (e,z) => (console.log("inline:",e,z))
  //  ["a","b"].map((e,z) => (console.log("inline:",e,z)));

  //im return einfach HTML schreiben und in {} javascript
  return (

<ul className='list-group' id={id+'-LISTE'}>
  {liste.map((listenElementText,index) => ( // singel line statement ohne return jsx Code
    <li
      onClick={() => {
        handleClick(index,appAuswahlValues) // ,justLog()
      }}
      className={actualIndex === index ? "list-group-item active" : "list-group-item"} 
      key={listenElementText}>
      {listenElementText}
    </li>
  ))}{/* HTML Kommentar oder auch nicht */}
</ul>

  );  
};

const Anzeige = ({alter,name,stadt,ausgewaelt}) => {
  //const w = props.ausgewaelt;
  const z = document.getElementById('mainheadline');
  const s = document.getElementById('Stadt-LISTE');
  let t ="nix";
  if(s){
    t = s.innerText;
  }else{
    t+=" |";
  }
  //e.hidden=true;
  //.innerText.length;

  function anzeigeClick() {
    let a = ausgewaelt.Alter;
    let n = ausgewaelt.Name;
    let s = ausgewaelt.Stadt;
    console.log(ausgewaelt,name,alter,stadt,n,a,s);
  }
  //return (<><p>AnzeigeText {auswahl}|{props}</p></>)

  return (<><p className="gross"
  onClick={() => {
    anzeigeClick()
  }}
  >AnzeigeText {auswahl}|{typeof s}|A{ausgewaelt.Alter} S{stadt} N{name} eigentlich alle props</p>
  </>)
};

const DisplayListGroup = (props) => {
  if(props.namen){
    //console.log(props.namen);
  }
  //console.log(props);
  return (
  <div>Display {variable} Stadt:{props.stadt} Alter={props.alter} Namen:{props.namen} Name:{props.name} {props.zweiteparameter} <b>{props.text}</b></div>
)}
export {DisplayListGroup};

export default ListGroup;
export {Anzeige};
