import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MitPatrick from './react/components/uebungen/MitPatrick'
import Welcome from './react/Welcome'
import Anwendung from './react/components/uebungen/mitChris/Anwendung.jsx';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
// wird durch index.html im BodyTag geladen
// ersetzt InnerHTML des rootdiv mit dem return der App Klasse
ReactDOM.createRoot(document.getElementById('rootdiv')).render(
  <React.StrictMode>
  {/* <!--
  <p id="mainheadline">ReactDOM.createRoot rootdiv im Bootstrapstyle 
    <br/> (Klicke auf ein WelcomeBlock weiter unten um diesen Text auszublenden!)</p>
  --> */}
  <Welcome text={"zu React coding"}/>
  {/*<hr class="line" />
  <MitPatrick />
  <hr class="line" /> */}
  {/* <Anwendung /> */}
  <App />
  </React.StrictMode>,
)

console.log("main.jsx ist durchgelaufen.");
