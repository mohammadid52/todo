import React from "react";
import { useForm, Form as MyForm } from "../../Utils/useForm";
import Controls from "../../Utils/Controls";
import { useDispatch, useSelector } from "react-redux";
import { signInWithGoogle, signUp } from "../../Redux/actions/authActions";
import { Redirect } from "react-router-dom";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import PersonOutlineSharpIcon from "@material-ui/icons/PersonOutlineSharp";

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
    return <Redirect to="/dashboard" />;
  }
  return (
    <MyForm onSubmit={handleSubmit}>
      <h1>Signup</h1>
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
        value={password}
        placeholder="Enter Password"
        onChange={handleInputChange}
        type="password"
      />
      <div className="d-flex">
        <Controls.Button
          icon={<PersonOutlineSharpIcon />}
          style={{ marginTop: ".6rem" }}
          label="Sign Up"
          type="submit"
        />
        <Controls.Button
          icon={<LockOpenSharpIcon />}
          onClick={() => dispatch(signInWithGoogle())}
          label="Sign-In with Google"
          color="secondary"
          style={{ marginTop: ".6rem", marginLeft: ".6rem" }}
        />
      </div>
    </MyForm>
  );
}

export default Signup;
