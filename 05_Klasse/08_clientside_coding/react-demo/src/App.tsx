import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [startValue, setStartValue] = useState(4); // just to avoid unused variable warning
  console.log("startValue,", startValue);

  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => setStartValue((prev) => prev + 1)}>
        Click me
      </button>
      <Counter startValue={startValue} />
    </>
  );
}

export default App;
