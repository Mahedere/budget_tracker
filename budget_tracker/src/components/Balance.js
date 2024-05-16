import React from 'react';
import { GlobalContext } from '../GlobalState';
function Balance() {
    const { transactions } = useContext(GlobalContext); //to access the context
  const amounts = transactions.map(transaction => transaction.amount);//for each transaction extracts the amount property

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); //rounding the final result to 2 decimal points
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>$0.00</h1>
    </div>
  );
}
export default Balance;