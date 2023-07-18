import { useMemo, useState } from "react";
import useCounter from "../Hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahí vamos...");
  }

  return `${iterationNumber} iteraciones realizadas`;
};

const MemoHook = () => {
  const [show, setShow] = useState(true);

  const { counter, Increment } = useCounter(4000);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => Increment()}>
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemoHook;
