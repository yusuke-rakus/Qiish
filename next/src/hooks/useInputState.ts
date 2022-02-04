import { SetStateAction, useCallback, useState } from "react";
import { SelectStateType, TextEventType } from "../const/Types";

/**
 * ChangeEventが発生するごとにString型の入力値が変更されてステートとして返されるメソッド
 *
 * @param initialState - 初期値(ステートの型を指定)
 * @returns [inputState: 入力した値, changeState: ChangeEventが発生し,inputStateの値を変更]
 */
export const useTextState = (
  initialState: string
): [string, (e: TextEventType) => void] => {
  const [inputState, setInputState] = useState(initialState);
  const changeState = useCallback((e: TextEventType) => {
    setInputState(e.target.value);
  }, []);
  return [inputState, changeState];
};

/**
 * セレクトタグで選択したvalueを受け取り、ステートとして返すメソッド
 *
 * @param initialState - 初期値(ステートの型を指定)
 * @returns [selectState: 選択した値, changeState: ChangeEventが発生し,selectStateの値を変更]
 */
export const useSelectState = (
  initialState: SelectStateType
): [SelectStateType, (value: SetStateAction<SelectStateType>) => void] => {
  const [selectState, setSelectState] = useState(initialState);
  const changeState = useCallback((value: SetStateAction<SelectStateType>) => {
    setSelectState(value);
  }, []);
  return [selectState, changeState];
};
