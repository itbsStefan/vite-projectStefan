import { useState } from 'react';
import NavBar from './NavBar';
import Cart from './Cart';

const Shop = () => {
    const [cartItems, setCartItems] = useState(['Product-1', 'Product-2']);

    const handleClearCart = () => {
        setCartItems([]);
    };
    return (
        <div>
            <NavBar cartItemsCount={cartItems.length} />
            {/* Navbar.cartItemAmount = 2 */}
            <br />
            <Cart cartItems={cartItems} onClearCart={handleClearCart} />
            {/* Cart.products = ['Produkt-1', 'Produkt-2'] */}
        </div>
    );
};

export default Shop;
