import ListGroup, {DisplayListGroup,Anzeige} from "./ListGroup.jsx";

let appAuswahl = {Name:"Stephanie",Stadt:"KW",Alter:2};
// let appAuswahl = {};

const stadt = ['London', 'Berlin','Paris'];
const namen = ['Stefan', 'Christian','Paul'];
const alter = ['10', '20','42'];

// name={appAuswahl.Name} stadt={stadt[appAuswahl.Stadt]} alter={alter[appAuswahl.Alter]}
const Anwendung = () => { // <> ist ein leeres Fragment quasi HTML Code
  return (
    <>
<Anzeige ausgewaelt={appAuswahl} name={appAuswahl['Name']} stadt={stadt[appAuswahl['Stadt']]} alter={alter[appAuswahl['Alter']]}/>
<DisplayListGroup name="" text="Anzeigetext im Display" zweiteparameter="2"/>

<ListGroup id={"Stadt"} liste={stadt} appAuswahlValues={appAuswahl}/>
<br />
<ListGroup id="Name" liste={namen} appAuswahlValues={appAuswahl}/>
<br />
<ListGroup id={"Alter"} liste={alter} appAuswahlValues={appAuswahl}/>
<hr />

<Anzeige ausgewaelt={appAuswahl} name="Name.active.ValueText" stadt={"Alter.active.ValueText"} alter={appAuswahl.Alter} text={alter[1]} />
<DisplayListGroup stadt={"Display "+appAuswahl.Stadt}  namen={namen} name={appAuswahl.Name} alter={appAuswahl.Alter}/>

{/*
Kommentar Zeilen
 */}</>
  ) // vom return
}   // function Anwendung()

export default Anwendung;
