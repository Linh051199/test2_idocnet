import { useContext } from "react";
import { CartContext, actions } from "../../store";
import React from "react";

function Cart() {
  const [state, dispatch] = useContext(CartContext);
  const { cartList } = state;

  return (
    <div>
      <button onClick={dispatch(actions.addCart("1"))}>Add</button>
      {cartList.map((cart, index) => (
        <li key={index}>{cart}</li>
      ))}
    </div>
  );
}

export default Cart;
