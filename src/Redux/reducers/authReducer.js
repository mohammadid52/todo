import { toast } from "react-toastify";
const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      toast.success("Welcome back....");
      return state;
    case "SIGN_IN_ERROR":
      toast.error("An error occured");
      return state;
    case "SIGN_IN_WITH_GOOGLE":
      toast.success("Welcome back....");
      return state;
    case "SIGN_IN_WITH_GOOGLE_ERROR":
      toast.error("An error occured");
      return state;
    case "SIGN_OUT":
      toast.warn("You signed Out");
      return state;
    case "SIGN_UP":
      toast.success("Welcome");
      return state;
    case "SIGN_UP_ERROR":
      toast.error("Error Signup");
      return state;
    default:
      return state;
  }
};
export default authReducer;
