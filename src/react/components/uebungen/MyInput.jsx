import { useRef } from 'react';

export function MyInput({defaulttext=null}) {

  let titeltext = ""
  //const eventRefImput = useRef(defaulttext); // Intitialisierung Event Ref Variable
  if(defaulttext === null) {
    defaulttext = ""
    titeltext = "noch kein Text eingegeben"
  }else{
    titeltext = defaulttext
  }
  console.log(defaulttext,titeltext)
  const eventRefImput = useRef(defaulttext); // Intitialisierung Event Ref Variable

  let x = " MyInput Komponete let x Text "

  function doMyEvent(event){
      eventRefImput.current = event.target.value
      console.log("eventRefImput change happen " + event.target.value)
      x = event.target.value
      /* console.log(event); */
      //Span organisieren und reinschreiben
      const nextElement = event.target.nextElementSibling
      nextElement.innerHTML = event.target.value
      // FIXME: schlechte Idee da die Komponente mehrfach auf eine Seite sein kann
      // finde den h2 Tag vor den Imputfeld bzw. vor dem label htmlFor="customInput"
      document.getElementById('imputtitel').innerHTML =  "<span>Eingabe: </span>" + event.target.value
  }

  function doSomethingonFokus(event) {
    const nextElement = event.target.nextElementSibling
    nextElement.innerHTML = "<p>onFokus use current Ref</p>"
    event.target.value = eventRefImput.current
  }

  return (<div>
    <h2 id="imputtitel" > {titeltext}</h2>
    <label htmlFor="customInput">Suche folgenden Text:</label>
    {x}  
    <input
        type="search"
        id="customInput"
        name="q"
        placeholder="search"
        // value={defaulttext}
        onChange={doMyEvent}
        onFocus={doSomethingonFokus}
          /> <span> nextElementSibling </span>
{/*         <div> nix </div>
      <div> next div </div> */}
  </div>);
}

export default MyInput;
