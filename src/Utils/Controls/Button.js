import React from "react";
import { Button as MuiButton } from "@material-ui/core";

const Button = ({ color, variant, icon, style, label, ...rest }) => {
  return (
    <MuiButton
      variant={variant || "outlined"}
      color={color || "primary"}
      startIcon={icon}
      style={style}
      {...rest}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
