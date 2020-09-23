import React from "react";
import { Button } from "react-bootstrap";
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
      <h1>Add Task</h1>
      <Controls.Input
        label="Add Task"
        name="task"
        value={task}
        placeholder="Enter Some Task"
        onChange={handleInputChange}
        type="text"
      />

      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </MyForm>
  );
};

export default AddTask;
