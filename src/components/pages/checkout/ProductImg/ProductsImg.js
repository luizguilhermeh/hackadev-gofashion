import React from 'react';
import image from './9d7c70cbcff8dc68355044619f195d3c.jpg';
import './ProductsImg.css';

class ProductImg extends React.Component {
  render() {
    return (
      <div className="product-image">
        <img src={image} alt="123" className='imagem-produto' />
      </div>
    );
  }
}

export default ProductImg;
