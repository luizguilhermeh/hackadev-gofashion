import React from 'react';
import './ProductPrice.css';

class ProductPrice extends React.Component {
  render() {
    return (
      <div>
        <div className="price">
          <p id="product-preco-id">De R$ 199,90 por:</p>
          <span id="product-preco-span">R$ 129,90</span>
        </div>
        <span id="product-preco-id">em até 3x R$ 43,30</span>
        <div class="select"></div>
      </div>
    );
  }
}

export default ProductPrice;
