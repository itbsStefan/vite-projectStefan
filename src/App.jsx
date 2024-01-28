import Welcome, { Display } from "./react/Welcome";
import ListGroup, { Anzeige } from "./react/components/ListGroup";
import Icons from "./react/components/Icons";
import { Fragment } from "react";

let appAuswahl = {'Name':"1","Stadt":0,"Alter":2};
// let appAuswahl = {};


const stadt = ['London', 'Berlin','Paris'];
const namen = ['Stefan', 'Christian','Paul'];
const alter = ['10', '20','42'];

// name={appAuswahl.Name} stadt={stadt[appAuswahl.Stadt]} alter={alter[appAuswahl.Alter]}
function App() { // <> ist ein leeres Fragment quasi HTML Code
  return (
    <>
      <Anzeige ausgewaelt={appAuswahl} name={appAuswahl['Name']} stadt={stadt[appAuswahl['Stadt']]} alter={alter[appAuswahl['Alter']]}/>
      <Display name="" text="Anzeigetext im Display" zweiteparameter="2"/>
      <Icons />
      <Welcome text="zur React" />
      <Welcome name="Stefan" age={42} text={"Das ist Text"} />
                  
 <ListGroup id={"Stadt"} liste={stadt} s={appAuswahl}/>
 <br />
 <ListGroup id="Name" liste={namen} s={appAuswahl}/>
 <br />
 <ListGroup id={"Alter"} liste={alter} s={appAuswahl}/>
             <hr />
      
<br />
             <Welcome name="Name.active.ValueText" age={"Alter.active.ValueText"} text={alter[1]} />
             <Display stadt="Display" namen="Tom" alter={appAuswahl.Alter}/>
    </>
  ) // vom return
}   // function App()

export default App;
