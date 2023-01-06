import { useState, Fragment } from 'react';
import './App.css';
import Title from './components/title';
import Footer from './components/footer';
import Chart from './components/chart';

const App = () => {
  const [months, setMonths] = useState(null);
  const [amount, setAmount] = useState(null);

  const handleChangeMonths = event => {
    setMonths(Number(event.target.value));
  }

  const handleChangeAmount = event => {
    setAmount(Number(event.target.value));
  }

  const projection = Array(months).fill().map((_,index) => {
    return {
      month: index + 1,
      amountSaved: amount * (index + 1)
    }
  });

  const hasFilledForm = months && amount;

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
      </div>
      {hasFilledForm && (
        <Fragment>
          <div className="summary-container">
            <div>Amount saved in {months} months: {months * amount}</div>
          </div>
          <div className="chart-container">
            <Chart projection={projection} />
          </div>
        </Fragment>
      )}
      <Footer text="Made by Mariam Zikaria"/>
    </div>
  );
}

export default App;
