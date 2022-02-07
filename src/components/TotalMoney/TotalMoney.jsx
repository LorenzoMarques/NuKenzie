import "./style.css";

const TotalMoney = ({ lisTransactions }) => {
  return (
    <div className="total-money">
      <p>
        Valor total R$:
        {lisTransactions.reduce((prev, curr) => {
          return prev + curr.value;
        }, 0)}
      </p>
    </div>
  );
};

export default TotalMoney;
