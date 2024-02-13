import { useState } from "react";

const Cart = ({ cartItems, deleteCartItems }) => {
  let text ="von Stefan";
  const [name, setName] = useState("Mario");
  const [count, setCount] = useState(0);

  function handelClick(e) {
      text = "handelClickTEXT ";
      //einEvent(e,false,true);
      if(name!='Luigi')
          setName('Luigi');
      else
          setName('Mario');

      console.log(text,' handelClick ',count + name);
  }


  function countClick() {
      text = "countClickTEXT ";
      let c = count+1;
      setCount(c);
      console.log(text,name,' countClick ' + count);
  } 

  console.log(cartItems)

  return (
    <div>
      <button onClick={deleteCartItems}>leere Cart</button> 
      <p> Cart [ {cartItems} ]    
        <br />{text}. 
      </p>
      <button onClick={countClick}>klick mich {count} {text}</button> 
    </div>
  )
}

export default Cart
