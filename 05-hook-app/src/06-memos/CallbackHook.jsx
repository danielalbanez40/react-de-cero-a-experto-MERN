import { useCallback, useEffect, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {

  const [counter, setCounter] = useState(0);

  const incrementFather = useCallback(
    () => {
       setCounter((value) =>  value + 1 );
    },
    [],
  )

  useEffect(() => {
    incrementFather();
  }, [incrementFather])
  

//   const incrementFather = () => {
//     setCounter(counter + 1);
//   };

  return (
    <>
      <h1>useCallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};

export default CallbackHook;
