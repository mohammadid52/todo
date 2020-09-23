import React from "react";
import { Table } from "react-bootstrap";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleCheck } from "../../Redux/actions/taskActions";
import Task from "./Task";

const Tasks = () => {
  useFirestoreConnect({
    collection: "tasks",
    orderBy: ["date", "desc"],
  });

  const tasks = useSelector((state) => state.firestore.ordered.tasks);
  const dispatch = useDispatch();

  return (
    <Table striped bordered hover variant="dark" className="container mt-4">
      <thead>
        <tr className="text-info">
          <th>Tasks</th>
          <th>Added On</th>
          <th>Status</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              title={task.task}
              date={task.date}
              onClick={() => dispatch(removeTask(task.id))}
              onToggle={() => dispatch(toggleCheck(task))}
              key={task.id}
              isDone={task.isDone}
            />
          ))
        ) : (
          <tr className="text-muted">
            <td>No tasks added</td>
            <td>No tasks added</td>
            <td>No tasks added</td>
            <td>No tasks added</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default Tasks;
