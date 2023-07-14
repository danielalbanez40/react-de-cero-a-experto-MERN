import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const handleInputChange = (e) => {
    // const { name, value } = target;
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    handleInputChange,
    handleReset,
  };
};

export default useForm;
