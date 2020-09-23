import { toast } from "react-toastify";
const initialState = {};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      toast.success("😄 Task Added");
      return state;

    case "ADD_TASK_ERROR":
      toast.error("An error occured");
      return state;

    case "REMOVE_TASK":
      toast.warn("😋 Task Deleted Successfully");
      return state;

    case "REMOVE_TASK_ERROR":
      toast.error("An error occured");
      return state;

    case "TOGGLE_CHECKED":
      toast.info("😇 Status Changed");
      return state;

    case "TOGGLE_CHECKED_ERROR":
      toast.error("An error occured");
      return state;

    default:
      return state;
  }
};
export default taskReducer;
