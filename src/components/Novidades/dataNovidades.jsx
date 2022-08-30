import {Novidades} from "./Novidades";
import dataNovidades from "./contentNovidades";

function home() {
  return (
    <div className="App">
      {dataNovidades.map((novidades,i) => (       
          <Novidades
            imagem={novidades.imagem}
            name={novidades.name}
            price={novidades.price}
            totalVendindos={novidades.totalVendindos}
            fimPromocao={novidades.fimPromocao}
            rating={novidades.rating}
            promo={novidades.promo}
            valorDesconto={novidades.valorDesconto}
            todosProdutos={novidades}
            id={novidades.id}
            key={i}
          />
        
      ))}
    </div>
  );
}
export default home;
