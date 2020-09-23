import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "./Components/auth/Signin";
import Signup from "./Components/auth/Signup";
import Dashboard from "./Components/dashboard/Dashboard";
import Navbar from "./Components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </>
  );
}

export default App;
