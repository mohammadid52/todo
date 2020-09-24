import React from "react";
import { useForm, Form as MyForm } from "../../Utils/useForm";
import Controls from "../../Utils/Controls";
import { addTask } from "../../Redux/actions/taskActions";
import { useDispatch } from "react-redux";
const initialValue = {
  task: "",
};

const AddTask = () => {
  const dispatch = useDispatch();
  const { values, handleInputChange, resetFields } = useForm(initialValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(values));
    resetFields();
  };

  const { task } = values;

  return (
    <MyForm onSubmit={handleSubmit}>
      <h1>Your Tasks</h1>
      <Controls.Input
        label="Add Task"
        name="task"
        value={task}
        onChange={handleInputChange}
      />

      <Controls.Button
        label="Add"
        style={{ marginTop: ".5rem" }}
        onClick={() => dispatch(addTask(values))}
      />
    </MyForm>
  );
};

export default AddTask;
