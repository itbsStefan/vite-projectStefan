import logo from '/vite.svg';
//import './App.css';

function MitPatrick() {
  const myFunction = (event) => {
    alert('OKAY ' + event.target.innerText);
  };
  const myHover = (event) => {
    console.log("HOVER");
    console.log(event);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/react/components/uebung/MitPatrick.jsx</code> and save to reload.
        </p>

        <p>Berlin 2024 Januar</p>
        <p>
          <strong>Hallo Welt !</strong>
        </p>
        
        <button 
          onClick={event => myFunction(event)}
        >Klick mich
        </button> .. 
        <button
          onClick={myFunction}
          onMouseEnter={event => myHover(event)}
        >Klick mich nochmal
        </button>
      </header>
    </div>
  );
}

export default MitPatrick;
