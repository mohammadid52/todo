import React from "react";
import moment from "moment";
import Check from "./Check";
import { withStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const Task = ({ title, date, onClick, onToggle, isDone, ...rest }) => {
  return (
    <StyledTableRow {...rest}>
      <StyledTableCell component="th" scope="row" style={{ fontWeight: 500 }}>
        {title}
      </StyledTableCell>
      <StyledTableCell>{moment(date.toDate()).calendar()}</StyledTableCell>
      <StyledTableCell>
        <Check onClick={onToggle} isDone={isDone} />
      </StyledTableCell>
      <StyledTableCell>
        <span
          className="material-icons text-danger"
          style={{ cursor: "pointer" }}
          onClick={onClick}
        >
          delete
        </span>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default Task;
