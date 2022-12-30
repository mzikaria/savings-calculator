import './App.css';
import Title from './components/title';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Title text="Savings Calculator"/>
      <div className="inputs-container">[INPUTS_PLACEHOLDER]</div>
      <div className="summary-container">[SUMMARY_PLACEHOLDER]</div>
      <div className="chart-container">[CHART_PLACEHOLDER]</div>
      <Footer text="Made by Mariam Zikaria"/>
    </div>
  );
}

export default App;
