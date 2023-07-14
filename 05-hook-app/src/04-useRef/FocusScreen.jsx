import { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleRef = () => {
    // console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su Nombre"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={handleRef}>
        Set Focus
      </button>
    </>
  );
};

export default FocusScreen;
