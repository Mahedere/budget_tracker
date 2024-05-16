import React, { useState, useContext } from 'react'; //imports useState and usecontext
import { GlobalContext } from '../GlobalState';

function AddTransaction() {
  const [text, setText] = useState(''); // [state variable,function]=manages(initial value)
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext); //to add new transactions

  const onSubmit = e => {
    e.preventDefault();//not to reload

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),//generates a random ID 
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;