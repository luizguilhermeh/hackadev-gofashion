import {Products} from "./products";
import content from "../../../content";
import Banner from '../../Banner/Banner'
import Novidades from '../../Novidades/dataNovidades'
import Frete from "../../Frete/Frete";
/* import Carrossel from "../../Carrossel/Carrossel"; */

function home() {
  return (
    <>
    <Frete/>{/* 
    <Carrossel/> */}
    <div className="App">
      {content.map((produto,i) => (       
          <Products
            imagem={produto.imagem}
            name={produto.name}
            price={produto.price}
            totalVendindos={produto.totalVendindos}
            fimPromocao={produto.fimPromocao}
            rating={produto.rating}
            promo={produto.promo}
            valorDesconto={produto.valorDesconto}
            color={produto.color}
            colorHex={produto.colorHex}
            todosProdutos={produto}
            id={produto.id}
            key={i}
          />
        
      ))}
    </div>
    <Banner/>
    <Novidades/>
    </>
  );
}
export default home;
