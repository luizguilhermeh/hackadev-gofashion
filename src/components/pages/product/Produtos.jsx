import React from "react";
import "./Produtos.css";
import content from "../../../content";
import contentNovidades from "../../Novidades/contentNovidades";
import { useStateContext } from "../../../context/StateContext";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

const Produtos = () => {
  const { decQty, incQty, qty, onAdd, cartItems } = useStateContext();

  const id = `${localStorage.getItem("id").replace(/"/g, " ")}`;
  let idNovo = [];

  if (id <= 12) {
    idNovo = content.filter((item) => item.id === parseInt(id));
  }
  if (id > 12) {
    idNovo = contentNovidades.filter((item) => item.id === parseInt(id));
  }

  return (
    <div className="navbar-container1">
      {idNovo.map((item) => (
        <div key={item.key} className="product-detail-container1">
          <div className="image-container1">
            <img src={item.imagem} className="product-detail-image1" alt="" />
          </div>
          <div>
            <div className="product-detail-desc1">
              <h1>{item.name}</h1>
              <div className="reviews1">
                <div>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <p className="nota1">(20)</p>
              </div>
              <p>Parcele no cartão GOFASHION em até 3x sem juros</p>
              <div className="productList1">
                <a href=" " className="preco1">
                  {item.valorDesconto === "" ? "" : `R$${item.valorDesconto}0`}
                </a>
                {item.promo === "" ? " " : `${item.promo} % off`}
              </div>
              <p className="price1">R$ {item.price}0</p>
              <div className="quantity1">
                <h3 className="quanti1">Quantidade:</h3>
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
              <div className="buttons1">
                <button
                  type="button"
                  className="add-to-cart1"
                  onClick={() => onAdd(item, qty)}
                >
                  ADICIONAR À SACOLA
                </button>

                {cartItems.length > 0 && (
                  <a href="/checkout">
                    <button type="button" className="buy-now1">
                      COMPRAR COM 1 CLIQUE
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Produtos;
