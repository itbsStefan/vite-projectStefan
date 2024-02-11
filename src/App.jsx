import { Fragment } from "react";
import CountApp from './components/CountApp'

import Welcome from "./react/Welcome";
import Stefan from "./react/components/Stefan";
import Icons, {Icons2} from "./react/components/Icons";
import MyInput from "./react/components/uebungen/MyInput";
import Stopwatch from "./react/components/Stopwatch";
import ListGruppe from "./react/components/ListGruppe";
import Anwendung from "./react/components/uebungen/mitChris/Anwendung";
import ListGroup, {DisplayListGroup, Anzeige } from "./react/components/uebungen/mitChris/ListGroup";
import AppNiels from "./components/AppNiels"

// name={appAuswahl.Name} stadt={stadt[appAuswahl.Stadt]} alter={alter[appAuswahl.Alter]}
function App() { // <> ist ein leeres Fragment quasi HTML Code
  return (
    <>
      {/* <Icons /> <Icons2 /> */}
      <Welcome text="zum React" />
      <MyInput /> 
      {/* <MyInput defaulttext="Inputfeld mit Startwert"/> */}
      {/* <ClickMich /> */}
      {/* <Stopwatch /> */}
      <Anwendung />
      <AppNiels />
      {/* <CountApp />  */}

      {/* <Welcome name="Textparameter ->Zahl:" age={42} text={"Das ist Text"} /> */}
      {/* <MyInput />  */}
      {/* <Stefan name="testname" age="16" /> */}

    </>
  ) // vom return
}   // function App()

export default App;
