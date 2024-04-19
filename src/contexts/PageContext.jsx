import React, { createContext, useReducer, useState } from "react";

// Reducer function to handle state transitions
const transitionReducer = (state, action) => {
  // header can set the status of the current page to initiate outro animation
  switch (action.type) {
    case "open":
        return { ...state, status: "opening", route: action?.route };
    case "opened":
        return {...state, status: "idle", route: action?.route };
    case "close": // tell page to initiate outro animation. Begin animation
      return { ...state, status: "closing", route: action?.route };
    case "closed": // done with animation
      return { ...state, status: "done", route: action?.route };
    default:
      return state;
  }
};

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [state, dispatch] = useReducer(transitionReducer, {
    route: null,
    status: "pending",
  });

  return (
    <PageContext.Provider
      value={{ currentPage, setCurrentPage, nextPage, setNextPage, state, dispatch }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
