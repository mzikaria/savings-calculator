import './App.css';
import Title from './components/title';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Title text="Savings Calculator"/>
      <div className="inputs-container">[INPUTS_PLACEHOLDER]
        <label>
          MONTHS_PLACEHOLDER
          <input type="text" name="months"/>
        </label>
        <label>
          AMOUNT_PLACEHOLDER
          <input type="text" name="amount"/>
        </label>
        <button>CALCULATE_BUTTON_PLACEHOLDER</button>
      </div>
      <div className="summary-container">[SUMMARY_PLACEHOLDER]
        <h>SUMMARY_PLACEHOLDER</h>
      </div>
      <div className="chart-container">[CHART_PLACEHOLDER]</div>
      <Footer text="Made by Mariam Zikaria"/>
    </div>
  );
}

export default App;
