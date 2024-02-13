import { useState } from 'react';

const Exercise1 = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: 'John',
        },
    });

    console.log(game);

    // TO-DO: Set Player Name to "Bob"

    const handleClick = () => {
        setGame({ ...game, player: { ...game.player, name: 'Bob' } });
    };
    return (
        <div>
            <button onClick={handleClick}></button>
        </div>
    );
};

export default Exercise1;
