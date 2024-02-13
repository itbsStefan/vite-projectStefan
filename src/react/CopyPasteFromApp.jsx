import Welcome, { Display } from "./react/Welcome";
import ListGroup, { Anzeige } from "./react/components/ListGroup";
import Stefan from "./react/components/Stefan";
import Icons from "./react/components/Icons";
import MyInput from "./react/components/uebungen/MyInput";
import CountApp from './components/CountApp'
import ClickMich from './components/ClickMich'
import { Fragment } from "react";

let appAuswahl = {'Name':"1","Stadt":0,"Alter":2};
// let appAuswahl = {};


const stadt = ['London', 'Berlin','Paris'];
const namen = ['Stefan', 'Christian','Paul'];
const alter = ['10', '20','42'];

// name={appAuswahl.Name} stadt={stadt[appAuswahl.Stadt]} alter={alter[appAuswahl.Alter]}
function CopyPasteFromApp() { // <> ist ein leeres Fragment quasi HTML Code
  return (
    <>
      <ClickMich />
      <CountApp /> 
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
             <Stefan name="testname" age="16" />
             <MyInput /> 
    </>
  ) // vom return
}   // function CopyPasteFromApp()

export default CopyPasteFromApp;


// import { Fragment } from "react";
// import CountApp from './components/CountApp'

// import Welcome from "./react/Welcome";
// import Stefan from "./react/components/Stefan";
// import Icons, {Icons2} from "./react/components/Icons";
// import MyInput from "./react/components/uebungen/MyInput";
// import Stopwatch from "./react/components/Stopwatch";
// import ListGruppe from "./react/components/ListGruppe";
// import Anwendung from "./react/components/uebungen/mitChris/Anwendung";
// import ListGroup, {DisplayListGroup, Anzeige } from "./react/components/uebungen/mitChris/ListGroup";
// import AppNiels from "./components/AppNiels"

// // name={appAuswahl.Name} stadt={stadt[appAuswahl.Stadt]} alter={alter[appAuswahl.Alter]}
// function App() { // <> ist ein leeres Fragment quasi HTML Code
//   return (
//     <>
//       {/* <Icons /> <Icons2 /> */}
//       <Welcome text="zum React" />
//       <MyInput /> 
//       {/* <MyInput defaulttext="Inputfeld mit Startwert"/> */}
//       {/* <ClickMich /> */}
//       {/* <Stopwatch /> */}
//       <Anwendung />
//       <AppNiels />
//       {/* <CountApp />  */}

//       {/* <Welcome name="Textparameter ->Zahl:" age={42} text={"Das ist Text"} /> */}
//       {/* <MyInput />  */}
//       {/* <Stefan name="testname" age="16" /> */}

//     </>
//   ) // vom return
// }   // function App()

// export default App;
