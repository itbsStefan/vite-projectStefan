import { useState } from 'react';

const UpdatingObjectsArray = () => {
    const [bugs, setBugs] = useState([
        { id: 1, title: 'Bug 1', fixed: false },
        { id: 2, title: 'Bug 2', fixed: false },
    ]);

    console.log(bugs);

    const handleCLick = () => {
        // Update Props in Array
        setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)));
    };

    return (
        <>
            {bugs.map((bug) => (
                <p key={bug.id}>
                    {bug.title} {bug.fixed ? 'fixed' : 'not fixed'}
                </p>
            ))}
            <div>
                <button onClick={handleCLick}>Click</button>
            </div>
        </>
    );
};

export default UpdatingObjectsArray;
