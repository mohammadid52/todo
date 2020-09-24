import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import { Provider, useSelector } from "react-redux";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "./Config/firebaseConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BarLoader from "react-spinners/BarLoader";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AuthIsLoaded = ({ children }) => {
  const { auth } = useSelector((state) => state.firebase);
  if (!isLoaded(auth)) {
    return (
      <div>
        <BarLoader
          loading={isLoaded}
          color={"#07689f"}
          width={"100%"}
          height={5}
        />
      </div>
    );
  }
  return children;
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <ToastContainer
            hideProgressBar={true}
            autoClose={1000}
            newestOnTop={true}
          />
          <AuthIsLoaded>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </AuthIsLoaded>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
