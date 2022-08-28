import React from "react";
import logo from "../../../img/logo.png";
import shopping from "../../../img/shopping.svg";
import user from "../../../img/account.png";
import "../home/home.css";
import "../../Logo/Logo.css";
import { Link } from "react-router-dom";

import Cart from "./Cart";
import { useStateContext } from "../../../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <>
      <div className="nav">
        <p>
          <a href="/">
            {" "}
            <img className="logo" src={logo} alt="" />
          </a>
        </p>
        <div className="icons-nav">
          <a href="/login">
            <button type="button" className="cart-icon">
              <img src={user} id="ShoppingBagIcon" alt="imagem" />
            </button>
          </a>

          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            <img src={shopping} id="ShoppingBagIcon" alt="imagem" />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </div>
        {showCart && <Cart />}
      </div>
    </>
  );
};
export default Navbar;
