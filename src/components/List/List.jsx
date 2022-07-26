import { useState } from "react";
import Card from "../Card/Card";
import "./style.css";
import { Button } from "./styled";

const List = ({ listTransactions, setListTransactions }) => {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState(["white", "#fd377e"]);
  const [entradas, setEntradas] = useState(["#868e96", "#e9ecef"]);
  const [saidas, setSaidas] = useState(["#868e96", "#e9ecef"]);
  const [focus, setFocus] = useState(["white", "#fd377e"]);
  const [all, setAll] = useState(["#868e96", "#e9ecef"]);

  if (listTransactions[0] !== undefined) {
    console.log(todos);
    return (
      <div className="list">
        <div className="resumo-financeiro">
          <h3>Resumo financeiro</h3>
          <Button
            background={todos[1]}
            color={todos[0]}
            onClick={() => {
              setEntradas(all);
              setSaidas(all);
              setTodos(focus);
              setFilter("all");
            }}
          >
            Todos
          </Button>
          <Button
            background={entradas[1]}
            color={entradas[0]}
            onClick={() => {
              setEntradas(focus);
              setSaidas(all);
              setTodos(all);
              setFilter("saida");
            }}
          >
            Entradas
          </Button>
          <Button
            background={saidas[1]}
            color={saidas[0]}
            onClick={() => {
              setEntradas(all);
              setSaidas(focus);
              setTodos(all);
              setFilter("entrada");
            }}
          >
            Despesas
          </Button>
        </div>
        {listTransactions.map((transaction, index) => {
          if (transaction.type !== filter) {
            return <Card transaction={transaction} key={index} />;
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="list">
        <div className="resumo-financeiro">
          <h3>Resumo financeiro</h3>
          <Button
            background={todos[1]}
            color={todos[0]}
            onClick={() => {
              setEntradas(all);
              setSaidas(all);
              setTodos(focus);
            }}
          >
            Todos
          </Button>
          <Button
            background={entradas[1]}
            color={entradas[0]}
            onClick={() => {
              setEntradas(focus);
              setSaidas(all);
              setTodos(all);
            }}
          >
            Entradas
          </Button>
          <Button
            background={saidas[1]}
            color={saidas[0]}
            onClick={() => {
              setEntradas(all);
              setSaidas(focus);
              setTodos(all);
            }}
          >
            Despesas
          </Button>
        </div>
        <h2>Você ainda não possui nenhum lançamento</h2>
        <div className="empty-card">
          <div className="empy-card-ractangle1"></div>
          <div className="empy-card-ractangle2"></div>
        </div>

        <div className="empty-card">
          <div className="empy-card-ractangle1"></div>
          <div className="empy-card-ractangle2"></div>
        </div>

        <div className="empty-card">
          <div className="empy-card-ractangle1"></div>
          <div className="empy-card-ractangle2"></div>
        </div>
      </div>
    );
  }
};

export default List;
