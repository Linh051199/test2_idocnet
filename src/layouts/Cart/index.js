import { useContext } from "react";
import { CartContext, actions } from "../../store";
import React from "react";

function Cart() {
  const [state, dispatch] = useContext(CartContext);
  const { cartList } = state;

  const handleOnClick = () => {
    dispatch(actions.addCart("1"));
  };

  return (
    <div>
      <button onClick={handleOnClick}>Add</button>
      {cartList.map((cart, index) => (
        <li key={index}>{cart.name}</li>
      ))}
    </div>
  );
}

export default Cart;
