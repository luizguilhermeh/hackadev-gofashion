import React, { useRef } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import { useStateContext } from "../../../context/StateContext";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
    selected
  } = useStateContext();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">SACOLA</span>
          <span className="cart-num-items">
            ({totalQuantities} {totalQuantities > 1 ? "ITENS" : "ITEM"})
          </span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Sua sacola está vazia</h3>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item.id}>
                <img
                  src={item.imagem}
                  alt="cart"
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex">
                    <h5>{item.name}</h5>
                    <h4>R${item.price.toFixed(2)}</h4>
                  </div>
                  <div className="tamanho">
                    <h4>Tamanho:{selected}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuanitity(item.id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuanitity(item.id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>R${totalPrice.toFixed(2)}</h3>
            </div>
            <div className="btn-container">
              <a href="/checkout">
              <button type="button" className="btn" >
                <span className="font-fin">Finalizar Pedido</span>
              </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
