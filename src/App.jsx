import React from "react";
import { useState } from "react";
import './App.css';
import CountApp from './components/CountApp';
import Navigation from   './components/Navigation';
import Cart from "./components/Cart";
import OnlineStatusHookApp from "./components/OnlineStatusHookApp";

const defaultProducts = [
  'Produkt-1',
  'Produkt-2'
]


function App() {
  const [cartItems, setCartItems] = useState(['Produkt-1','Produkt-2'])

  function deleteCartItems(e) {
    setCartItems([])
  }
  function setDefaultCartItems(e) {
    setCartItems(defaultProducts)
  }



  return (
    <>
      <Navigation cartItemAmount={cartItems.length} setDefaultCartItems={setDefaultCartItems}/>
      <br /><hr />
      <Cart cartItems={cartItems} deleteCartItems={deleteCartItems} />
      <hr />
      <OnlineStatusHookApp />
    </>
  ) // vom return
}   // function App()

export default App;
