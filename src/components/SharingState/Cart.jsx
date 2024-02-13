/* eslint-disable react/prop-types */

const Cart = ({ cartItems, onClearCart }) => {
    return (
        <>
            <div>Cart</div>
            <ul>
                {cartItems.map((cartItem) => (
                    <li key={cartItems}>{cartItem}</li>
                ))}
            </ul>

            <button onClick={onClearCart}>Clear</button>
        </>
    );
};

export default Cart;
