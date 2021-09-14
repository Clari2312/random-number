import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";

function App() {
  const [numberState, setNumberState] = useState(10);

  const randomNumberHandler = () => {
    setNumberState(Math.floor(Math.random() * 11));
  };

  return (
    <div className="App">
      <Display displayNumber={numberState} />
      <Button changeNumber={randomNumberHandler} />
    </div>
  );
}

export default App;
