import { useCallback, useState } from "react";

export const useToggle = (
  initialState: boolean | number
): [boolean | number, () => void] => {
  const [state, setState] = useState(initialState);

  // useCallbackを用いて余分なレンダリングをなくす
  // why?・・・より高い再利用性のためにはuseCallbackが必要
  // ステートに受け取った値をセット(true or false)
  const toggle = useCallback(() => {
    setState((b) => !b);
  }, []);
  return [state, toggle];
};
