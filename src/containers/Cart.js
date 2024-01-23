import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const totalQuantity = (cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )).toFixed(2);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem
            item={item}
            />
          </li>
        ))}
      </ul>
      <p className="cart-total">
        Total: $
        {totalQuantity}
      </p>
    </div>
  );
};

export default Cart;
