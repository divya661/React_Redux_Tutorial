import React from "react";
import { useDispatch } from "react-redux";

import { addToCartProduct, removeFromCartProductId } from "../redux/actions/cartActions";
const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const decrementCartItem = () => {
    dispatch(removeFromCartProductId(item.id));
  };
  const incrementCartItem = () => {
    dispatch(addToCartProduct(item));
  };

  return (
    <div className="cartItem">
      <p className="cartItemTitle">
        <strong>{item.title}</strong>
      </p>
      <p className="cart-single-item-price">${item.price}</p>
      <button className="cart-actions" onClick={decrementCartItem}>
        -
      </button>
      <p className="cart-item-quantity">{item.quantity}</p>
      <button className="cart-actions" onClick={incrementCartItem}>
        +
      </button>
      <article className="cart-item-total">${(item.price*item.quantity).toFixed(2)}</article>
    </div>
  );
};

export default CartItem;
