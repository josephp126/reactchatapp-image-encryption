import React, { createContext, useEffect, useReducer } from "react";
import authInitialState from "./initialStates/authInitialState";
import selectedChatInitialState from "./initialStates/selectedChatInitialState";
import auth from "./reducers/auth";
import selectedChat from "./reducers/selectedChat";
export const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  const [authState, authDispatch] = useReducer(auth, authInitialState, () => {
    const localAuthState = localStorage.getItem("authState");
    return localAuthState ? JSON.parse(localAuthState) : authInitialState;
  });
  const [selectedChatState, selectedChatDispatch] = useReducer(
    selectedChat,
    selectedChatInitialState,
    () => {
      const localSelectedChatInitialStateState =
        localStorage.getItem("selectedChatState");
      return localSelectedChatInitialStateState
        ? JSON.parse(localSelectedChatInitialStateState)
        : selectedChatInitialState;
    }
  );

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(authState));
  }, [authState]);

  useEffect(() => {
    localStorage.setItem(
      "selectedChatState",
      JSON.stringify(selectedChatState)
    );
  }, [selectedChatState]);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        selectedChatState,
        authDispatch,
        selectedChatDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalProvider;
