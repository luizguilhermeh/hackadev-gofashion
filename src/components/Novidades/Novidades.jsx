import React from "react";
import { FaShoppingCart, FaRegBookmark, FaStar } from "react-icons/fa";

import { useStateContext } from "../../context/StateContext";
import '../pages/home/home.css'

export function Novidades(prod) {
  const { qty, onAdd,screenProduct } = useStateContext();

  return (
    <div className="productList">
      <div key={prod.id} className="productCard">
        <div className="descount2">
          {prod.promo === "" ? (
            " "
          ) : (
            <a className="descount" href="/#">
              {prod.promo}% off
            </a>
          )}
        </div>
        <a href={`/product/${prod.name}`} onClick={() => screenProduct(prod.todosProdutos)}><img src={prod.imagem} alt="product-img" className="productImage"></img></a>

        <a href="/#" onClick={() => onAdd(prod.todosProdutos, qty)}>
          <FaShoppingCart
            className="productCard__cart"
            title="Adicionar Carrinho"
          />
        </a>

        <FaRegBookmark className="productCard__wishlist" title="Favoritar" />

        <div className="productCard__content">
          <h3 className="productName">{prod.name}</h3>
          <div className="displayStack__1">
            <div className="productPrice">
              <a href="/#" className="preco">
                {prod.valorDesconto === "" ? "" : ` ${prod.valorDesconto}0`}
              </a>
              R${ prod.price}0
            </div>
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
