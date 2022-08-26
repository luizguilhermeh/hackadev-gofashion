import React from "react";

import "./checkout.css";

function Checkout() {
  return (
    // container principal
    <div className="container-main">
      {/* container onde aparece o review dos produtos */}
      <div className="review-product">
        <h1>Produtos</h1>
      </div>
      {/* container da tela de checkout (envio e pagamento) */}
      <div className="checkout-main">
        {/* container tela de envio */}
        <div className="checkout-post">
          <div className="checkcout-post-title">
            <h1>Envio</h1>
          </div>
          <div className="checkout-post-send">
            <p>
              Enviando para:{" "}
              <b>
                Jose Carlos da Silva, Pça da matriz,174 - Centro, Itaberái - GO
                - 76630-000
              </b>{" "}
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
            <div className="payment">
              <label>Pix</label>
              <input type="radio" name="payment-button-option" id="pix" />
            </div>

            <div className="payment">
              <label>Boleto</label>
              <input type="radio" name="payment-button-option" id="boleto" />
            </div>

            <div className="payment">
              <label>Cartão de Crédito</label>
              <input
                type="radio"
                name="payment-button-option"
                id="cartao-credito"
              />
            </div>

            <div className="payment">
              <label>Trasferência</label>
              <input
                type="radio"
                name="payment-button-option"
                id="trasferencia"
              />
            </div>
          </div>
          {/* botão finalizar compra */}
          <button className="button">Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
