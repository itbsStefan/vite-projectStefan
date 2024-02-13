import { useState } from "react";

const Navigation = ({ cartItemAmount,setDefaultCartItems }) => {
  let text ="von Stefan";

  return (
    <div><h2>Navigation Navbar {cartItemAmount}</h2>
      <p onClick={setDefaultCartItems}>      
        {text} klick hier setDefaultCartItems()
      </p>
    </div>
  )
}

export default Navigation
