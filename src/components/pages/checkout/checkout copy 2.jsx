import React from "react";

import contentNovidades from "../../Novidades/contentNovidades";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  
} from "react-icons/ai";

import SubmitButton from "../../form/SubmitButton"

import content from "../../../content";
import { useStateContext } from "../../../context/StateContext";

import "./checkout.css";


function Checkout() {
  const { decQty, incQty, qty, } = useStateContext();

  const id = `${localStorage.getItem("id").replace(/"/g, " ")}`;
  let idNovo = [];

  if (id <= 12) {
    idNovo = content.filter((item) => item.id === parseInt(id));
  }
  if (id > 12) {
    idNovo = contentNovidades.filter((item) => item.id === parseInt(id));
  }
  return (
    // container principal
    <div className="container">
      <div className="container-checkout">
        <div className="checkout-products">
          <div className="checkout-products-title">
            <h1>Sacola de Produtos</h1>
          </div>
          <div className="checkout-products-details">
            {idNovo.map((item) => (
              <div key={item.key} className="checkout-products-details1">
                <div className="image-container1">
                  <img
                    src={item.imagem}
                    className="checkout-product-detail-image1"
                    alt="img"
                  />
                </div>
                <div className="item-name">
                  <h1>{item.name}</h1>
                </div>
                <div className="productList1">
                  <a href=" " className="preco1">
                    {item.valorDesconto === ""
                      ? ""
                      : `R$${item.valorDesconto}0`}
                  </a>
                  {item.promo === "" ? " " : `${item.promo} % off`}
                </div>
                <div className="checkout-price">
                  <span className="checkout-price1">R$ {((item.price)*qty).toFixed(1)}0</span>
                </div>
                <div className="checkout-quantity1">
                  <h3 className="checkout-quanti1">Quantidade:</h3>
                  <p className="quantity-desc1">
                    <span className="minus1" onClick={decQty}>
                      <AiOutlineMinus />
                    </span>
                    <span className="num1">{qty}</span>
                    <span className="plus1" onClick={incQty}>
                      <AiOutlinePlus />
                    </span>
                  </p>
                </div>
                
              </div>
              
            ))}
          </div>
        </div>

        <div className="checkout-post">
          <div className="checkout-post-title">
            <h1>Envio</h1>
          </div>
          <div className="checkout-post-send">
            <p>
              Enviando para: <b>Jose Carlos da Silva, Pça da matriz...</b>{" "}
            </p>
          </div>
          <div className="checkout-post-subtotal">
            <p>Frete: (Grátis)</p>
            <p className="total">Total do pedido: R$ 129,90</p>
            <p>Em 3x de R$ 43,3 sem juros</p>
          </div>
        </div>
        {/* container tela de pagamento */}
        <div className="checkout-payment">
          <div className="checkout-payment-title">
            <h1>Pagamento</h1>
          </div>

          {/* opções de pagamento */}
          <div className="payment-options">
            <div id="input-option356">
              <div className="radio">
                <label>
                  <input type="radio" name="option[356]" value="288" />
                  <span>PIX</span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="option[356]" value="282" />
                  <span>Cartão de Crédito</span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="option[356]" value="283" />
                  <span>Boleto</span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="option[356]" value="283" />
                  <span>Trasferência</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* botão finalizar compra */}
      <div className="container-button">
      <SubmitButton href="/notification"
text="Finalizar Compra" />
      </div>
    </div>
  );
}

export default Checkout;
