// Pure Functions geben bei gleichem Input immer das gleiche Ergebnis zurück

/*
const result = myFunc(1);
result = 'a'

Egal wie oft man die Funktion aufruft, man bekommt immer das gleiche Ergebnis

*/

const PureComponent = () => {
    let count = 0;
    count++;
    return <div>Message {count}</div>;
};

export default PureComponent;
