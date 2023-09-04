"use client";
import React, { createContext, useReducer } from "react";

type User = any;

type State = {
  user: User;
  setUser: (user: User) => void;
};

const initialState: State = {
  user: null,
  setUser: () => {},
};

export const GlobalContext = createContext(initialState);

const reducers = (state: State, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    default:
      return { ...state };
  }
};

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = (useReducer as any)(reducers, initialState);

  const setUser = (user: User) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  const globalState: State = {
    user: state.user,
    setUser,
  };

  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
};
