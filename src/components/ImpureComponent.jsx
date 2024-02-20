let count = 0; // Impure , produziert anderes Ergebnis, nicht tun!

/*
    Reacts Strict-Mode re-rendert jede Componente zwei Mal, dadurch
    können wir impure Components erkennen
*/

const ImpureComponent = () => {
    count++;
    console.log('ImpureComponent ' + count); // Check console log um Strict Mode zu sehen

    return <div>ImpureComponent {count}</div>;
};

export default ImpureComponent;
