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

  return {
    ...formState,
    formState,
    handleInputChange,
  };
};

export default useForm