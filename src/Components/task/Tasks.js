// import React from "react";
// import { Table } from "react-bootstrap";
// import { useFirestoreConnect } from "react-redux-firebase";

// const Tasks = () => {

//   return (
//     <Table striped bordered hover variant="dark" className="container mt-4">
//       <thead>
//         <tr className="text-info">
//           <th>Tasks</th>
//           <th>Added On</th>
//           <th>Status</th>
//           <th>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         {tasks && tasks.length > 0 ? (
//           tasks.map((task) => (

//           ))
//         ) : (
//           <tr className="text-muted">
//             <td>No tasks added</td>
//             <td>No tasks added</td>
//             <td>No tasks added</td>
//             <td>No tasks added</td>
//           </tr>
//         )}
//       </tbody>
//     </Table>
//   );
// };

// export default Tasks;

import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Container from "@material-ui/core/Container";
import { useFirestoreConnect } from "react-redux-firebase";
import Task from "./Task";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleCheck } from "../../Redux/actions/taskActions";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(3),
    "& thead th": {
      fontWeight: "600",
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.primary.light,
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#fffbf2",
      cursor: "pointer",
    },
  },
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export default function StickyHeadTable() {
  const classes = useStyles();
  const tasks = useSelector((state) => state.firestore.ordered.tasks);
  const dispatch = useDispatch();

  const { uid } = useSelector((state) => state.firebase.auth);
  useFirestoreConnect({
    collection: `users/${uid}/tasks`,
    orderBy: ["date", "desc"],
    storeAs: "tasks",
  });

  return (
    <TableContainer component={Container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Calories</StyledTableCell>
            <StyledTableCell>Added On</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
            <TableRow className="text-muted">
              <TableCell>No Tasks</TableCell>
              <TableCell>No Tasks</TableCell>
              <TableCell>No Tasks</TableCell>
              <TableCell>No Tasks</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
