import Card from "../Card/Card";
import "./style.css";

const List = ({ listTransactions }) => {
  if (listTransactions[0] !== undefined) {
    return (
      <div className="list">
        {listTransactions.map((transaction, index) => {
          return <Card transaction={transaction} key={index} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="list">
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
