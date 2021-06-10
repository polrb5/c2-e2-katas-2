import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="container">
        <button onClick={decrement} className="boton" sign="-">
          <i className="icono">➖</i>
        </button>
        <input
          className="input-number"
          id="num"
          value={counter}
          type="number"
          readOnly
        />
        <button onClick={increment} className="boton" sign="+">
          <i className="icono">➕</i>
        </button>
      </div>
    </>
  );
}

export default App;
