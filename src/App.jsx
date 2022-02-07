import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form/Form";
import TotalMoney from "./components/TotalMoney/TotalMoney";
import List from "./components/List/List";
import ReactDOM from "react-dom";
import InicialPage from "./InicialPage/InicialPage";
import NuKenzie from "./imagens/NuKenzieBlack.png";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <figure>
          <img src={NuKenzie} alt="Nu Kenzie" className="img" />
        </figure>
        <button
          onClick={() =>
            ReactDOM.render(
              <React.StrictMode>
                <InicialPage />
              </React.StrictMode>,
              document.getElementById("root")
            )
          }
        >
          Inicio
        </button>
      </header>
      <div className="main-container">
        <div>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney lisTransactions={listTransactions} />
        </div>
        <List listTransactions={listTransactions} />
      </div>
    </div>
  );
}

export default App;
