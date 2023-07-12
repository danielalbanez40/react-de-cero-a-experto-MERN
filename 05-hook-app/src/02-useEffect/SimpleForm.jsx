import { useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Daniel",
    email: "daniel@daniel.com",
  });

  const { username, email } = formState;

  const handleInputChange = (e) => {
    // const { name, value } = target;
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  //   useEffect(() => {
  //     console.log("useEffect called!!!");
  //   }, []);

  //   useEffect(() => {
  //     console.log("FormState Changed!!!");
  //   }, [formState]);

  //   useEffect(() => {
  //     console.log("Email Changed!!!");
  //   }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        name="username"
        id="username"
        className="form-control"
        placeholder="Username"
        value={username}
        onChange={handleInputChange}
      />

      {username === "Danielsan" && <Message />}

      <input
        type="email"
        name="email"
        id="email"
        className="form-control mt-2"
        placeholder="ex: email@email.com"
        value={email}
        onChange={handleInputChange}
      />
    </>
  );
};

export default SimpleForm;
