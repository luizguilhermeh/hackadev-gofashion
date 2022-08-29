import {Products} from "./products";
import content from "../../../content";

function home() {
  return (
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
            todosProdutos={produto}
            id={produto.id}
            key={i}
          />
        
      ))}
    </div>
  );
}
export default home;
