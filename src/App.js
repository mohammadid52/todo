import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "./Components/auth/Signin";
import Signup from "./Components/auth/Signup";
import Dashboard from "./Components/dashboard/Dashboard";
import MenuAppBar from "./Utils/Controls/AppBar";

function App() {
  return (
    <>
      <MenuAppBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </>
  );
}

export default App;
