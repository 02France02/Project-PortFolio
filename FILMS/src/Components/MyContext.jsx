import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const myStateContext = createContext;

function MyContext({ children }) {
  const [prod, setProd] = useState([]);
  return (
    <myStateContext.provider value={{ prod, setProd }}>
      {children}
    </myStateContext.provider>
  );
}

export default MyContext;
