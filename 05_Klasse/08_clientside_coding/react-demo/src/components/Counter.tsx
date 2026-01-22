import { useEffect, useState } from "react";

type Props = {
  startValue: number;
};

export default function Counter({ startValue }: Props) {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    console.log("CStaret value changed", startValue);
  }, [startValue]);
  //dependency array is empty, so this runs only on mount

  return (
    <div>
      Counter:{count}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
