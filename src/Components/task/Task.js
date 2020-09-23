import React from "react";
import moment from "moment";
import Check from "./Check";
const Task = ({ title, date, onClick, onToggle, isDone, ...rest }) => {
  return (
    <tr {...rest}>
      <th>{title}</th>
      <td>{moment(date.toDate()).calendar()}</td>
      <td>
        <Check onClick={onToggle} isDone={isDone} />
      </td>
      <td>
        <span
          className="material-icons text-danger"
          style={{ cursor: "pointer" }}
          onClick={onClick}
        >
          delete
        </span>
      </td>
    </tr>
  );
};

export default Task;
