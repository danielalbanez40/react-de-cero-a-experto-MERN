import { useState } from "react";


const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState((initialValue));

  const Increment = (value = 1) => {
    setCounter((current) => current + value);
  };

  const Decrement = (value = 1) => {
    // if (counter === 0) return;
    setCounter((current) => counter - value);
  };

  const Reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    Increment,
    Decrement,
    Reset,
  };
};

export default useCounter;
