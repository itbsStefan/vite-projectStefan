import { useState } from 'react';

const Exercise2 = () => {
    const [pizza, setPizza] = useState({
        name: 'Spicy Pepperoni',
        toppings: ['Mushroom'],
    });

    // TO-DO: Neues Topping dem toppings Array hinzufügen

    const handleClick = () => {
        setPizza({ ...pizza, toppings: [...pizza.toppings, 'Pepperoni'] });
    };
    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default Exercise2;
