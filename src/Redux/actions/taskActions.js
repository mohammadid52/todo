export const addTask = (task) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("tasks")
      .add({
        ...task,
        date: new Date(),
        isDone: false,
      })
      .then(() => {
        dispatch({
          type: "ADD_TASK",
          task,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_TASK_ERROR",
          err,
        });
      });
  };
};
export const removeTask = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("tasks")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({
          type: "REMOVE_TASK",
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_TASK_ERROR",
          err,
        });
      });
  };
};
export const toggleCheck = (task) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("tasks")
      .doc(task.id)
      .set(
        {
          ...task,
          isDone: !task.isDone,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({
          type: "TOGGLE_CHECKED",
        });
      })
      .catch((err) => {
        dispatch({
          type: "TOGGLE_CHECKED_ERROR",
          err,
        });
      });
  };
};
