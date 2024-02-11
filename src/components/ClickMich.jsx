import { useState } from 'react'

function ClickMich() {
//  const [count, setCount] = useState(0)
  return (
    <>
        <Header />
        <MainDiv />
    </>
  )
}





const Header = () => {

  return (
    <h1>Stateübung! Modul ClickMich</h1>
  );
}

const MainDiv = () => {
  let text ="von Stefan";
  const [name, setName] = useState("Mario");
  const [count, setCount] = useState(0);

  function handelClick(e) {
      text = "handelClickTEXT ";
      //einEvent(e,false,true);
      if(name!='Luigi')
          setName('Luigi');
      else
          setName('Mario');

      console.log(text,' handelClick ',count + name);
  }

  function countClick() {
      text = "countClickTEXT ";
      let c = count+1;
      setCount(c);
      console.log(text,name,' countClick ' + count);
  } 

  return (
    <div>
      <button onClick={handelClick}>klick mich</button> 
      <p>      
        {name} Inhalt von State und Hooks {text}. 
      </p>
      <button onClick={countClick}>klick mich {count} {text}</button> 
    </div>
  );
}

export default ClickMich
