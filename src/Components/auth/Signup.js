import React from "react";
import { Button } from "react-bootstrap";
import { useForm, Form as MyForm } from "../../Utils/useForm";
import Controls from "../../Utils/Controls";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../Redux/actions/authActions";
import { Redirect } from "react-router-dom";

const initialValue = {
  email: "",
  password: "",
};

function Signup() {
  const { values, handleInputChange } = useForm(initialValue);
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.firebase.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(values));
  };

  const { email, password } = values;

  if (uid) {
    return <Redirect to="/" />;
  }
  return (
    <MyForm onSubmit={handleSubmit}>
      <h1>Signup</h1>
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
      <div className="d-flex">
        <Button variant="primary" type="submit" className="mr-2">
          Signup
        </Button>

        <Button variant="primary" type="submit" className="ml-2">
          Sign-up with Google
        </Button>
      </div>
    </MyForm>
  );
}

export default Signup;
