import { useState } from "react";
import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const addList = (transaction) => {
    setListTransactions([...listTransactions, transaction]);
  };
  console.log(listTransactions);
  const createTransaction = (description, type, value) => {
    if (type === "saida" && value > 0) {
      value = -value;
    }
    const transaction = { description: description, type: type, value: value };
    return transaction;
  };
  const [InputDescription, setInputDescription] = useState("");
  const [inputR$, setInputR$] = useState("");
  const [option, setOption] = useState("entrada");

  return (
    <form className="form">
      <p>Descrição</p>
      <input
        className="input-description"
        type="text"
        placeholder="Digite sua Descrição"
        value={InputDescription}
        onChange={(event) => setInputDescription(event.target.value)}
      />
      <span>Ex: Compras de roupas</span>

      <div className="valor-tipo">
        <div className="valor">
          <p>Valor</p>
          <input
            type="number"
            placeholder="R$"
            value={inputR$}
            onChange={(event) => setInputR$(event.target.value)}
          />
        </div>
        <div className="valor">
          <p>Tipo de Valor</p>
          <select onChange={(event) => setOption(event.target.value)}>
            <option value="entrada">Entrada</option>
            <option value="saida">Saida</option>
          </select>
        </div>
      </div>
      <button
        type="button"
        onClick={() =>
          addList(createTransaction(InputDescription, option, Number(inputR$)))
        }
      >
        Inserir Valor
      </button>
    </form>
  );
};

export default Form;
