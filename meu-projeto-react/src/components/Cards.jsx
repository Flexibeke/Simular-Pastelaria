import Card from "./card";
import { pasteis, acompanhamentos, bebidas } from "../assets/cardapio";

const Cards = ({ numCategoriaSelecionada }) => {
  const itens = [pasteis, acompanhamentos, bebidas];
  const categoriaSelecionada = itens[numCategoriaSelecionada];

  return (
    <div className="cards">
      {categoriaSelecionada.map((item) => (
        <Card
          titulo={item.nome}
          descricao={item.descricao}
          preco={item.preco}
          imagem={item.imagem}
        />
      ))}
    </div>
  );
};

export default Cards;
