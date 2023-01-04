import './App.css';
import Title from './components/title';
import Footer from './components/footer';
import Chart from './components/chart';

const App = () => {
  return (
    <div>
      <Title text="Savings Calculator"/>
      <div className="inputs-container">
        <input type="number" placeholder="Enter months" name="months"/>
        <input type="number" placeholder="Enter Amount" name="amount"/>
        <button>Calculate</button>
      </div>
      <div className="summary-container">[SUMMARY_PLACEHOLDER]
        <h>SUMMARY_PLACEHOLDER</h>
      </div>
      <div className="chart-container">
        <Chart/>
      </div>
      <Footer text="Made by Mariam Zikaria"/>
    </div>
  );
}

export default App;
