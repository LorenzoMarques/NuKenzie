import React, { useState } from "react";
import Form from "../../components/Form/Form";
import TotalMoney from "../../components/TotalMoney/TotalMoney";
import List from "../../components/List/List";
import NuKenzie from "../../imagens/NuKenzieBlack.png";
import { useHistory } from "react-router-dom";

const MainPage = ({ setColor }) => {
  const [listTransactions, setListTransactions] = useState([]);
  const history = useHistory();

  return (
    <>
      <header className="App-header">
        <figure>
          <img src={NuKenzie} alt="Nu Kenzie" className="img" />
        </figure>
        <button
          onClick={() => {
            setColor("#282c34");
            history.push("/");
          }}
        >
          Inicio
        </button>
      </header>
      <div className="App">
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
    </>
  );
};

export default MainPage;
