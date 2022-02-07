const CardSaida = ({ transaction }) => {
  return (
    <li>
      <div>
        <h3>{transaction.description}</h3>
        <span>{transaction.type}</span>
      </div>
      <p>R$:{transaction.value}</p>
    </li>
  );
};

export default CardSaida;
