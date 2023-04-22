import React, { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const incrementar = () => {
    setCounter(counter + 1);
  };

  const decrementar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const resetear = () => {
    setCounter(0);
  };

  return { counter, incrementar, decrementar, resetear };
};

export default useCounter;
