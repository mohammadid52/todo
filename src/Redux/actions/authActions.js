export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: "SIGN_IN",
        });
      })
      .catch((err) => {
        dispatch({
          type: "SIGN_IN_ERROR",
          err,
        });
      });
  };
};
export const signInWithGoogle = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
        dispatch({
          type: "SIGN_IN_WITH_GOOGLE",
        });
      })
      .catch((err) => {
        dispatch({
          type: "SIGN_IN_WITH_GOOGLE_ERROR",
          err,
        });
      });
  };
};
export const signUp = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: "SIGN_UP",
        });
      })
      .catch((err) => {
        dispatch({
          type: "SIGN_UP_ERROR",
          err,
        });
      });
  };
};
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGN_OUT",
        });
      });
  };
};
