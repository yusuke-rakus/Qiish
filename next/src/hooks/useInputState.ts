import { SetStateAction, useCallback, useState } from "react";

// ステートのカスタムフック(インプット、テキストエリア)
export type TextEventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

export const useTextState = (
  initialState: string
): [string, (e: TextEventType) => void] => {
  const [inputState, setInputState] = useState(initialState);

  // useCallbackを用いて余分なレンダリングをなくす
  // why?・・・より高い再利用性のためにはuseCallbackが必要
  // インプットタグの入力値をセット
  const changeState = useCallback((e: TextEventType) => {
    setInputState(e.target.value);
  }, []);
  return [inputState, changeState];
};

// ステートのカスタムフック(str or str[]セレクトタグ)
// タグの初期化時にコールバック関数を使用するため3つ目のtypeがある
export type SelectStateType = string | number[] | (() => SelectStateType);

export const useSelectState = (
  initialState: SelectStateType
): [SelectStateType, (value: SetStateAction<SelectStateType>) => void] => {
  const [selectState, setSelectState] = useState(initialState);

  // セレクトボックスで選択した値をセット
  const changeState = useCallback((value: SetStateAction<SelectStateType>) => {
    setSelectState(value);
  }, []);
  return [selectState, changeState];
};
