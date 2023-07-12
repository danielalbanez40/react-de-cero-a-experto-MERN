import useCounter from "../Hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, Increment, Decrement, Reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => {
          Increment(2);
        }}
      >
        +1
      </button>

      <button className="btn btn-primary" onClick={Reset}>
        Reset
      </button>

      <button
        className="btn btn-primary"
        onClick={() => {
          Decrement(2);
        }}
      >
        -1
      </button>
    </>
  );
};

export default CounterWithCustomHook;
