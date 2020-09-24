import { TextField } from "@material-ui/core";
import React from "react";

const Input = ({ label, name, value, onChange, ...rest }) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
export default Input;
