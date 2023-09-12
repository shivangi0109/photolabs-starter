import { useState } from "react";

export const useToggle = () => {
  const [state, setstate] = useState(false);

  const toggle = () => {
    setstate(!state);
  };

  return [state, toggle];
};