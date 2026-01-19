import { useState } from "react";

import TrafficLightContainer from "./components/TrafficLightContainer";

function App() {
  const [color, setColor] = useState<"red" | "orange" | "green">("red");

  return (
    <>
      <h1>Traffic Light Demo</h1>
      <div className="flex flex-col items-center gap-5">
        <TrafficLightContainer />

        <div className="flex gap-2.5">
          <button onClick={() => setColor("red")}>Red</button>
          <button onClick={() => setColor("orange")}>Orange</button>
          <button onClick={() => setColor("green")}>Green</button>
        </div>
      </div>
    </>
  );
}

export default App;
