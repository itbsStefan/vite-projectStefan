import { useState } from 'react';

const Exercise3 = () => {
    const [cart, setCart] = useState({
        discount: 0.1,
        items: [
            { id: 1, title: 'Product 1', quantity: 1 },
            { id: 2, title: 'Product 2', quantity: 1 },
        ],
    });

    // TO-DO: Ändere quantity des Produkts mit id 2 zu 2

    const handleClick = () => {
        setCart({
            ...cart,
            items: cart.items.map((item) => (item.id === 2 ? { ...item, quantity: 2 } : item)),
        });
    };
    return (
        <div>
            <button onClick={handleClick}></button>
        </div>
    );
};

export default Exercise3;
