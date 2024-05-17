import React from 'react';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
function App() {
  return (
    <div className="App">
      <h1>Budget Tracker</h1>
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <AddTransaction/>
      <TransactionList/>
    </div>
  );
}

export default App;
