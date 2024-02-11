import ManagedList from './ManagedList'
import ClickMich from './ClickMich'
import Welcome from '../react/Welcome';
import { useState, useRef } from 'react';

const cars = ["VW","Opel","Porsche"];

const defaultTasks = [ 
    {id:1,text:"Einkafen"},
    {id:2,text:"Urlaub"},
    {id:3,text:"Essen"}
                    ];


// name={appAuswahl.Name} stadt={stadt[appAuswahl.Stadt]} alter={alter[appAuswahl.Alter]}
function AppNiels() { // <> ist ein leeres Fragment quasi HTML Code

  const [todoliste, setTodoliste] = useState(cars)


  return (
  <>
    <ClickMich />
    <hr class="line" />
    <ManagedList liste={todoliste} setTodoliste={setTodoliste} />
    <Welcome text="Übungen mit Niels."/>
  </>
  ) // vom return
}   // function App()

export default AppNiels;
