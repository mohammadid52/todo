import React from "react";
import { useForm, Form as MyForm } from "../../Utils/useForm";
import Controls from "../../Utils/Controls";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signInWithGoogle } from "../../Redux/actions/authActions";
import { Redirect } from "react-router-dom";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import PersonOutlineSharpIcon from "@material-ui/icons/PersonOutlineSharp";

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
    return <Redirect to="/" />;
  }
  return (
    <MyForm onSubmit={handleSubmit}>
      <h1>Signin</h1>
      <Controls.Input
        label="Email Address"
        autoFocus={true}
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
      <Controls.Button
        icon={<PersonOutlineSharpIcon />}
        style={{ marginTop: ".6rem" }}
        label="Sign In"
        type="submit"
      />
      <Controls.Button
        icon={<LockOpenSharpIcon />}
        label="Sign-In with Google"
        color="secondary"
        onClick={() => dispatch(signInWithGoogle())}
        style={{ marginTop: ".6rem", marginLeft: ".6rem" }}
      />
    </MyForm>
  );
}

export default Signin;
