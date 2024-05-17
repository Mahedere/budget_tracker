import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';

function Balance() {
  const { transactions } = useContext(GlobalContext);

  // Calculate balance logic
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h2>Your Balance</h2>
      <h3>${total}</h3>
    </div>
  );
}

export default Balance;