import { useCallback, useState } from "react";

// ステートのカスタムフック(インプット、テキストエリア)
type EventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

export const useTextState = (
  initialState: string
): [string, (e: EventType) => void] => {
  const [inputState, setInputState] = useState(initialState);

  // useCallbackを用いて余分なレンダリングをなくす
  // why?・・・より高い再利用性のためにはuseCallbackが必要
  const changeState = useCallback((e: EventType) => {
    setInputState(e.target.value);
  }, []);
  return [inputState, changeState];
};