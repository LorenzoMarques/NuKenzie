import "./style.css";

const Card = ({ transaction }) => {
  return (
    <li className={transaction.type}>
      <div>
        <h3>{transaction.description}</h3>
        <span>{transaction.type}</span>
      </div>
      <p>R$: {transaction.value}</p>
    </li>
  );
};

export default Card;
