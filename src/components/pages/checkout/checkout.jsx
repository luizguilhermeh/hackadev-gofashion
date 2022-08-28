import React from "react";

import SubmitButton from "../../form/SubmitButton";

import "./checkout.css";

function Checkout() {
  return (
    // container principal
    <div className="container">
      <div className="container-checkout">
        <div className="checkout-products">
          <div className="checkout-products-title">
            <h1>Sacola de Produtos</h1>
          </div>
          <div className="checkout-products-details">
            <p>Produto XXX </p>
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
            <p>Itens: (valor aqui)</p>
            <p>Frete: (valor aqui)</p>
            <p className="total">Total do pedido: (valor aqui)</p>
            <p>Em 3x de (valor aqui) sem juros</p>
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
        <SubmitButton text="Finalizar Compra" />
      </div>
    </div>
  );
}

export default Checkout;
