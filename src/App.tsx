import "./App.css";
import React, { useState } from "react";

// you can refactot code creating a CounterButton
// const CounterButton: React.FC<ButtonProps> = ({ onClick, buttonContent }) => {
//   const condition = buttonContent === "+";
//   return (
//     <button
//       data-testid={condition ? "incremented-value" : "decremented-value"}
//       onClick={onClick}
//     >
//       {buttonContent}
//     </button>
//   );
// };

// and use it as
// <CounterButton buttonContent={"-"} onClick={getDecrementedValue} />;

const App: React.FC = () => {
  const [value, setValue] = useState(0);

  const getIncrementedValue = () => {
    setValue((previousValue) => previousValue + 1);
  };

  const getDecrementedValue = () => {
    setValue((previousValue) => previousValue - 1);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-body">
          <button
            className="app-button button1"
            data-testid="incremented-value"
            onClick={getIncrementedValue}
          >
            +
          </button>
          <span data-testid="counter-value">{value}</span>
          <button
            className="app-button button2"
            data-testid="decremented-value"
            onClick={getDecrementedValue}
          >
            -
          </button>
        </div>
      </header>
    </div>
  );
};

export default App;
