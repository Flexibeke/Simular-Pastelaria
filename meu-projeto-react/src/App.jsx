import "./App.css";
import { useState } from "react";
import Categorias from "./components/Categorias";
import Banner from "./components/banner";
import Cards from "./components/Cards";

const App = () => {
  const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0);

  return (
    <div className="container">
      <Banner />
      <Categorias
        numCategoriaSelecionada={numCategoriaSelecionada}
        setNumCategoriaSelecionada={setNumCategoriaSelecionada}
      />
      <Cards numCategoriaSelecionada={numCategoriaSelecionada} />
    </div>
  );
};

export default App;
