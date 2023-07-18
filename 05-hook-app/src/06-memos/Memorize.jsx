import { useState } from "react"
import useCounter from "../Hooks/useCounter"
import Small from "./Small"

const Memorize = () => {

    const [show, setShow] = useState(true);
    
    const {counter, Increment} = useCounter(0)

  return (
    <>
      <h1>
        {" "}
        Counter: <Small value={counter} />{" "}
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={() => Increment()}>
        +1
      </button>

      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
}

export default Memorize