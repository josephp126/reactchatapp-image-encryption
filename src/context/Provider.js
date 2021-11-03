import React, { createContext, useEffect, useReducer } from "react";
import authInitialState from "./initialStates/authInitialState";
import auth from "./reducers/auth";
export const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  const [authState, authDispatch] = useReducer(auth, authInitialState, () => {
    const localAuthState = localStorage.getItem("authState");
    return localAuthState ? JSON.parse(localAuthState) : authInitialState;
  });

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(authState));
  }, [authState]);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalProvider;
