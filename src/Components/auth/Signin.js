import React from "react";
import { Button } from "react-bootstrap";
import { useForm, Form as MyForm } from "../../Utils/useForm";
import Controls from "../../Utils/Controls";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../Redux/actions/authActions";
import { Redirect } from "react-router-dom";

const initialValue = {
  email: "",
  password: "",
};

function Signin() {
  const { values, handleInputChange } = useForm(initialValue);
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.firebase.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(values));
  };

  const { email, password } = values;
  if (uid) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <MyForm onSubmit={handleSubmit}>
      <h1>Signin</h1>
      <Controls.Input
        label="Email Address"
        name="email"
        value={email}
        placeholder="Enter Email Address"
        onChange={handleInputChange}
      />
      <Controls.Input
        label="Password"
        name="password"
        type="password"
        value={password}
        placeholder="Enter Password"
        onChange={handleInputChange}
      />
      <Button variant="primary" type="submit">
        Signin
      </Button>
    </MyForm>
  );
}

export default Signin;
