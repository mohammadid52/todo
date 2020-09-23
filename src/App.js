import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "./Components/auth/Signin";
import Signup from "./Components/auth/Signup";
import Dashboard from "./Components/dashboard/Dashboard";
import Home from "./Components/dashboard/Home";
import Navbar from "./Components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </>
  );
}

export default App;