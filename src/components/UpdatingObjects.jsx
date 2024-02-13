import { useState } from 'react';

const UpdatingObjects = () => {
    const [cocktail, setCocktail] = useState({
        title: 'Old Fashioned',
        price: 7,
    });

    console.log(cocktail);

    const handleClick = () => {
        cocktail.price = 8; // nicht tun!
        setCocktail(cocktail); // funktioniert nicht

        const newPrice = {
            title: cocktail.title, 
            price: 9,
        };

        setCocktail(newPrice);
        // oder
        setCocktail({ ...cocktail, price: 9 }); // spread cocktail object
    };

    return (
        <div>
            {cocktail.price}
            <button onClick={handleClick}>Show</button>
        </div>
    );
};

export default UpdatingObjects;
