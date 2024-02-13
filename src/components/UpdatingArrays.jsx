import { useState } from 'react';

const UpdatingArrays = () => {
    const [mood, setMood] = useState(['happy', 'cheerful']);

    console.log(mood);

    const handleCLick = () => {
        // Neues Array item hinzufügen
        mood.push('sad'); // Tu das nicht! Es verändert das original Array

        setMood([...mood, 'sad']);

        // Item aus Array entfernen
        setMood([...mood].filter((mood) => mood !== 'happy'));

        // Update Item in Array
        setMood(mood.map((mood) => (mood === 'sad' ? 'blub' : mood)));
    };

    return (
        <div>
            <button onClick={handleCLick}>Click</button>
        </div>
    );
};

export default UpdatingArrays;
