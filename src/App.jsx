/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import PureComponent from './components/PureComponent';
import ImpureComponent from './components/ImpureComponent';
import ExpandableText from './components/ExpandableText/ExpandableText';

// React updatet state asynchron => also nicht sofort, wegen Performance
// State wird außerhalb der Komponente gespeichert
// Hooks wie State-Hook können nur an oberster Stelle der Komponente genutzt werden

const App = () => {
    const [isVisible, setVisibility] = useState(false);
    let count = 0; // Function Scope, immer 0

    const handleClick = () => {
        setVisibility(true);
        console.log(isVisible);

        count++; // Update hier geht verloren wenn Komponente re-rendert
    };
    // Updated State erst nach dem Ausführen der Function

    console.log(count);
    return (
        <div>
            {count} {/* Immer 0 */}
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default App;
