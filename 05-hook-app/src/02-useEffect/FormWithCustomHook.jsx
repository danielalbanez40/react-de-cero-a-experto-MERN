import useForm from "../Hooks/useForm";

const FormWithCustomHook = () => {
  
  const {
    formState,
    handleInputChange,
    handleReset,
    username,
    email,
    password,
  } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const {username, email, password} = formState;

  return (
    <>
      <h1>FormWithCustomHook</h1>
      <hr />
      <form action="">
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
          placeholder="Username"
          autoComplete="off"
          value={username}
          onChange={handleInputChange}
        />

        <input
          type="email"
          name="email"
          id="email"
          className="form-control mt-2"
          placeholder="ex: email@email.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          name="password"
          id="psswd"
          className="form-control mt-2"
          placeholder="Contraseña"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />

        <button type="reset" onClick={handleReset} className="btn btn-primary mt-2"> Reset </button>

      </form>
    </>
  );
};

export default FormWithCustomHook;
