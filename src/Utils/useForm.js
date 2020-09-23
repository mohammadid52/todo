import React, { useState } from "react";
import { Form as ReactForm } from "react-bootstrap";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const handleInputChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };
  const resetFields = () => {
    setValues(initialValue);
  };
  return {
    resetFields,
    values,
    setValues,
    handleInputChange,
  };
};

export const Form = ({ children, ...rest }) => {
  return (
    <ReactForm className="container mt-4" autoComplete="off" {...rest}>
      {children}
    </ReactForm>
  );
};
