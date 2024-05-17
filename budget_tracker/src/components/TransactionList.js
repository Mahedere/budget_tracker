import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';
import Transaction from './Transaction';

function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;