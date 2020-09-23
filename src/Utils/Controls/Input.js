import React from "react";
import { Form } from "react-bootstrap";

const Input = ({ label, name, value, type, placeholder, onChange }) => {
  return (
    <Form.Group className="mt-4">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        value={value}
        type={type || "email"}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Group>
  );
};
export default Input;
