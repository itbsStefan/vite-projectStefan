import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppC from './react/components/uebungen/AppC.jsx';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
// wird durch index.html im BodyTag geladen
// ersetzt InnerHTML des rootdiv mit dem return der App Klasse
ReactDOM.createRoot(document.getElementById('rootdiv')).render(
  <React.StrictMode>
    <p id="mainheadline">ReactDOM.createRoot rootdiv im Bootstrapstyle <br/> (Klicke auf eine Liste weiter unten um diesen Text auszublenden!)</p>
    <App />
    <AppC />
  </React.StrictMode>,
)
console.log("main.jsx ist durchgelaufen.");
