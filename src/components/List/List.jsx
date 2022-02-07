import Card from "../Card/Card";
import "./style.css";

const List = ({ listTransactions }) => {
  if (listTransactions[0] !== undefined) {
    return (
      <div className="list">
        <div className="resumo-financeiro">
          <h3>Resumo financeiro</h3>
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </div>
        {listTransactions.map((transaction, index) => {
          return <Card transaction={transaction} key={index} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="list">
        <div className="resumo-financeiro">
          <h3>Resumo financeiro</h3>
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
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
