import { useState } from 'react';
import './App.css';
import Title from './components/title';
import Footer from './components/footer';
import Chart from './components/chart';

const App = () => {
  const [months, setMonths] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleChangeMonths = event => {
    setMonths(event.target.value);
  }

  const handleChangeAmount = event => {
    setAmount(event.target.value);
  }

  return (
    <div>
      <Title text="Savings Calculator"/>
      <div className="inputs-container">
        <input
          min="0"
          type="number"
          placeholder="Enter months"
          value={months}
          onChange={handleChangeMonths}
        />
        <input
          min="0"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={handleChangeAmount}
        />
        <button>Calculate</button>
      </div>
      <div className="summary-container">
        <h1>savings: {months * amount}</h1>
      </div>
      <div className="chart-container">
        <Chart/>
      </div>
      <Footer text="Made by Mariam Zikaria"/>
    </div>
  );
}

export default App;
