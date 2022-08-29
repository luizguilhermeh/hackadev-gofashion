import React from "react";
import { FaShoppingCart, FaRegBookmark, FaStar } from "react-icons/fa";

import { useStateContext } from "../../../context/StateContext";

export function Products(prod) {
  const { qty, onAdd } = useStateContext();

  return (
    <div className="productList">
      <div key={prod.id} className="productCard">
        <img src={prod.imagem} alt="product-img" className="productImage"></img>
        <a>
          onClick={() => onAdd(prod.todosProdutos, qty)}
          <FaShoppingCart
            className="productCard__cart"
            title="Adicionar Carrinho"
          />
        </a>
        <FaRegBookmark className="productCard__wishlist" title="Favoritar" />

        <div className="productCard__content">
          <h3 className="productName">{prod.name}</h3>
          <div className="displayStack__1">
            <div className="productPrice">R${prod.price}0</div>
            <div className="productSales">{prod.totalVendindos} unidades</div>
          </div>

          <div className="displayStack__2">
            <div className="productRating">
              {[...Array(prod.rating)].map((item, i) => (
                <FaStar id={item + 1} key={i} />
              ))}
            </div>
            <div className="productTime">
              {prod.fimPromocao} Dias Para o Fim da Promoção
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
