import React, { useState, useContext } from 'react';
import { GlobalContext } from '../GlobalState';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { dispatch } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    dispatch({
      type: 'ADD_TRANSACTION',
      payload: newTransaction
    });

    // Reset form fields after submission
    setText('');
    setAmount(0);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="amount">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
