import { useCallback, useState } from "react";

export const useAddOrSubOne = (
  initialState: number
): [number, (bool: boolean) => void] => {
  const [numState, setNumState] = useState(initialState);

  const calcAddOrSubOne = useCallback((bool: boolean) => {
    if (!bool) {
      setNumState((N) => N + 1);
    } else {
      setNumState((N) => N - 1);
    }
  }, []);

  return [numState, calcAddOrSubOne];
};
