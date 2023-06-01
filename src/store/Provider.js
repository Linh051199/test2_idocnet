import reducer, { initState } from "./reducer";
import { useReducer } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;