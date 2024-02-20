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

const longText= 'Sayyid Shaykh al-Hadi stammte väterlicherseits aus der arabischen Familie der Bā-Alawī, deren ursprüngliche Heimat der <a href="/wiki/Hadramaut" title="Hadramaut">Hadramaut</a> ist. Die Bā-Alawī sind <a href="/wiki/Saiyid" class="mw-redirect" title="Saiyid">Saiyids</a>, also Nachkommen des Propheten <a href="/wiki/Mohammed" title="Mohammed">Mohammed</a>.<sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup> Ein Vorfahre Sayyid Shaykhs war gegen Ende des 18. Jahrhunderts aus dem Hadramaut eingewandert und hatte sich in Malakka, einem der ältesten und wichtigsten malaiischen Häfen, niedergelassen. Sein Großvater Hasan ibn as-Saqqāf (auch <i>al-Sagoff</i> geschrieben), der bereits in Kampung Hulu, einem Stadtteil von Malakka, geboren war, hatte wie viele andere arabische Einwanderer eine einheimische malaiische Frau geheiratet. Aus der Ehe mit ihr ging 1837 Sayyid Shaykhs Vater Ahmad al-Hadi hervor. Dieser wurde später in der <a href="/wiki/Landwirtschaft" title="Landwirtschaft">Landwirtschaft</a> und im Handel tätig und heiratete 1858<sup id="cite_ref-4" class="reference"><a href="#cite_note-4">[4]</a></sup> Dhu l-Hiddscha, eine Frau aus der königlichen Familie von Malakka, mit der er fünf Kinder hatte.<sup id="cite_ref-#1_5-0" class="reference"><a href="#cite_note-#1-5">[5]</a></sup> Die Familie besaß in der Nähe von Malakka Ländereien.<sup id="cite_ref-#2_6-0" class="reference"><a href="#cite_note-#2-6">[6]</a></sup> Aufgrund seiner gemischten arabisch-malaiischen Abkunft wird Sayyid Shaykh al-Hadi der Gruppe der arabischen <a href="/wiki/Peranakan" class="mw-redirect" title="Peranakan">Peranakan</a> zugeordnet.<sup id="cite_ref-7" class="reference"><a href="#cite_note-7">[7]</a></sup>';

    const [isVisible, setVisibility] = useState(false);
    let count = 0; // Function Scope, immer 0

    const handleClick = () => {
        setVisibility(!isVisible);
        console.log(isVisible);

        count++; // Update hier geht verloren wenn Komponente re-rendert
    };
    // Updated State erst nach dem Ausführen der Function

    console.log(count);
    return (
        <div>
            {count} {/* Immer 0 */}
            <button onClick={handleClick}>Click</button>
            <hr />
            <PureComponent />
            <ImpureComponent />
            <ExpandableText children2={longText} maxChars={50} />
        </div>
    );
};

export default App;
