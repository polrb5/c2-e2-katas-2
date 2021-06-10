import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  const limitNumber = (counter) => {
    counter = Math.min(100, Math.max(0, counter));
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
          min="0"
          max="10"
        />

        <button onClick={increment} className="boton" sign="+">
          <i className="icono">➕</i>
        </button>
      </div>
    </>
  );
}

export default App;
