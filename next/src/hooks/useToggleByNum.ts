import { useCallback, useState } from "react";

export const useToggleByNum = (initialState: number): [boolean, () => void] => {
  // initalStateが0だったらfalse,1だったらtrue
  let initalBool = true;
  if (initialState === 0) {
    initalBool = false;
  } else {
    initalBool = true;
  }

  const [state, setState] = useState(initalBool);

  // useCallbackを用いて余分なレンダリングをなくす
  // why?・・・より高い再利用性のためにはuseCallbackが必要
  // ステートに受け取った値をセット(true or false)
  const toggle = useCallback(() => {
    setState((b) => !b);
  }, []);
  return [state, toggle];
};
