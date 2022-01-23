import { useCallback, useState } from "react";

export const useInputState = (
  initialState: string
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [inputState, setInputState] = useState(initialState);

  // useCallbackを用いて余分なレンダリングをなくす
  // const changeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserName(e.target.value);
  // };
  // why?・・・より高い再利用性のためにはuseCallbackが必要
  const changeState = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  }, []);
  return [inputState, changeState];
};
