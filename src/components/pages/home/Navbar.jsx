import React from "react";
import logo from "../../../img/logo.svg";
import shopping from "../../../img/shopping.svg";
import '../home/home.css'

import Cart from './Cart';
import { useStateContext} from '../../../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <>
      <div className="nav">
        <p>
         <a href="/"> <img className="logo" src={logo} alt=''/></a>
        </p>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <img src={shopping} id="ShoppingBagIcon" alt="imagem"/>
           <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        {showCart && <Cart />}
      </div>
    </>
  );
};
export default Navbar;
