const IncomeList = ({ incomes, deleteIncome }) => {
  return (
    <ul>
      {incomes.map((item) => (
        <li key={item.id}>
          {item.source} - ₹{item.amount}
          <button onClick={() => deleteIncome(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default IncomeList;