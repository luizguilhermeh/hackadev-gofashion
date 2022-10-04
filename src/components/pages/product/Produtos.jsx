import React from "react";
import "./Produtos.css";
import content from "../../../content";
import contentNovidades from "../../Novidades/contentNovidades";
import { useStateContext } from "../../../context/StateContext";
import Cabide from '../../../img/iconsProvador/Cabide.svg'
import Metrica from '../../../img/iconsProvador/Metrica.svg'

export const Produtos = () => {
  const {
    /* decQty, incQty ,*/ qty,
    onAdd,
    cartItems,
    handleChange,
    selected,
  } = useStateContext();

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
      {/* <Cart selected={selected}/> */}
      {idNovo.map((item) => (
        <div key={item.key} className="product-detail-container1">
          <div className="image-container1">
            <img src={item.imagem} className="product-detail-image1" alt="" />
          </div>
          <div>
            <div className="product-detail-desc1">
              <span className="product-name">{item.name}</span>
              <div className="reviews1">
                Vendido e entregue por
                <span className="destaque"> GOFASHION</span>
              </div>
              <div>
                <div className="select-color">
                  Selecionar Cor:{" "}
                  <span className="select-color-name">{item.color}</span>
                </div>
                <div
                  className="color-tshirt-container"
                  style={{ border: `2px solid #${item.colorHex}` }}
                >
                  <div
                    className="color-tshirt-container1"
                    style={{ background: `#${item.colorHex}` }}
                  ></div>
                  {/* <div className="color-tshirt"></div> */}
                </div>
              </div>
              <div className="container-size">
                <div className="product-descricao-tamanho">
                  Selecionar Tamanho: {selected}
                </div>
                <form className="buttons-size">
                  {/* <input type="radio" id="yes" name="choose" value="yes" checked={selected === "yes"} onChange={handleChange}/>
                <label htmlFor="yes">Yes</label> */}

                  <input
                    type="radio"
                    id="PP"
                    name="size"
                    value="PP"
                    /* onClick={() => handleChange("PP")} */
                    onChange={handleChange}
                    className = 'input-size'
                  />
                  <label className = 'label-size' for="PP">PP</label>

                  <input
                    type="radio"
                    id="P"
                    name="size"
                    value="P"
                    /* onClick={() => handleChange("P")} */
                    onChange={handleChange}
                    className = 'input-size'
                  />
                  <label className = 'label-size' for="P">P</label>

                  <input
                    type="radio"
                    id="M"
                    name="size"
                    value="M"
                    /* onClick={() => handleChange("M")} */
                    onChange={handleChange}
                      className = 'input-size'
                  />
                  <label className = 'label-size' for="M">M</label>

                  <input
                    type="radio"
                    id="G"
                    name="size"
                    value="G"
                    /* onClick={() => handleChange("G")} */
                    onChange={handleChange}
                    className = 'input-size'
                  />
                  <label className = 'label-size' for="G">G</label>

                  {/* <input type="radio" id="PP" name="size" value="PP" checked={selected === "PP"} onChange={handleChange}/>
                  <label for="PP">PP</label>

                <input type="radio" id="P" name="size" value="P" checked={selected === "P"} onChange={handleChange}/>
                  <label for="P">P</label>

                <input type="radio" id="M" name="size" value="M" checked={selected === "M"} onChange={handleChange}/>
                  <label for="M">M</label>

                <input type="radio" id="G" name="size" value="G" checked={selected === "G"} onChange={handleChange}/>
                  <label for="G">G</label>
                  */}
                </form>
              </div>

              <div className="vestuario">
                <div><img src={Cabide} alt="" title=""/>Provador Virtual</div>
                <div><img src={Metrica} alt="" title=""/>Tabela de Medidas</div>
              </div>

              <div className="productList1">
                <a href=" " className="preco1">
                  {item.valorDesconto === "" ? "" : `R$${item.valorDesconto}0`}
                </a>
                {item.promo === "" ? " " : `(${item.promo}% off)`}
              </div>

              <p className="price1">R$ {item.price}0</p>
              <p>
                Em até 3x {(item.price / 3).toFixed(2)} sem juros{" "}
                <span className="destaque">GOFASHION</span>
              </p>

              <div className="buttons1">
                <button
                  type="button"
                  className="add-to-cart1"
                  onClick={selected ? () => onAdd(item, qty) : `Por favor, escolha uma opção`}                  
                >
                  ADICIONAR À SACOLA
                </button>
                {console.log(selected+'oi')}
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
