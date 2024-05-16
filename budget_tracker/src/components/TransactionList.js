import React, { useContext } from 'react'; //imports usecontext which allows to access context value
import { GlobalContext } from '../GlobalState'; //imports globalcontext provides the globalstate for the app

function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
            {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span>{/*math ensures that the absolute value is displayed */}
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;