import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import {  useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


const Header = () => {
  const quantity = useSelector(state => state.cart.totalQuantity);
  const history = useHistory();
  const navigateToCart = () => {
    history.push("/cart");
  };


  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <a href="/">
          <h2>E-Store</h2>
        </a>
      </div>
      <button className="cart-btn" onClick={navigateToCart}>
        <FaShoppingCart />
        <span className="cart-quantity">{quantity}</span>
      </button>
    </div>
  );
};

export default Header;
