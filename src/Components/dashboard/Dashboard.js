import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import AddTask from "../task/AddTask";
import Tasks from "../task/Tasks";

function Dashboard() {
  const { uid } = useSelector((state) => state.firebase.auth);
  if (uid) {
    return (
      <>
        <AddTask />
        <Tasks />
      </>
    );
  }
  return <Redirect to="/todo/signin/" />;
}

export default Dashboard;
