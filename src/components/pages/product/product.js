import ActionButton from './ActionButton/ActionButton';
import ProductImg from './ProductImg/ProductsImg';
import ProductPrice from './ProductPrice/ProductPrice';
import ProductInformation from './ProductInformation/ProductInformation';
import SizeButton from './SizeButton/SizeButton';
import React from 'react';

function product(){
  return(
    <div>
    <ProductImg />
    <ProductInformation />
    <ProductPrice />
    <SizeButton />
    <ActionButton />
  </div>
  );
};

export default product;