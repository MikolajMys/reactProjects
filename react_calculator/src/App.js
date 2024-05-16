import "./style.css"

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      <button className="btn-top">AC</button>
      <button className="btn-top">+/-</button>
      <button className="btn-top">DEL</button>
      <button className="btn-functions">÷</button>
      <button className="btn-numbers">1</button>
      <button className="btn-numbers">2</button>
      <button className="btn-numbers">3</button>
      <button className="btn-functions">x</button>
      <button className="btn-numbers">4</button>
      <button className="btn-numbers">5</button>
      <button className="btn-numbers">6</button>
      <button className="btn-functions">-</button>
      <button className="btn-numbers">7</button>
      <button className="btn-numbers">8</button>
      <button className="btn-numbers">9</button>
      <button className="btn-functions">+</button>
      <button className="span-two">0</button>
      <button className="btn-numbers">,</button>
      <button className="btn-functions">=</button>
    </div>
  );
}

export default App;
