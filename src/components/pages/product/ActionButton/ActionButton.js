import React from 'react';
import './ActionButton.css';

class ActionButton extends React.Component {
  render() {
    return (
      <div className="items">
        <div className="product-escolhas">
          <input
            className="product-escolha-final"
            type="button"
            value="Adicionar ao Carrinho"
          ></input>
          <input
            className="product-escolha-final"
            type="button"
            value="Comprar com 1 Clique"
          ></input>
        </div>
      </div>
    );
  }
}

export default ActionButton;
