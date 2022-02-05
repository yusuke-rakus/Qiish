import { useCallback, useState } from "react";

/**
 * 初期値で渡ってきた値を±1するメソッド
 *
 * @param initialState - Number型の初期値(useAddOrSubOneを実行した時の引数)
 * @returns [numState: 初期値を±1した値, calcAddOrSubOne: ±1する処理]
 */
export const useAddOrSubOne = (
  initialState: number
): [number, (bool: boolean) => void] => {
  const [numState, setNumState] = useState(initialState);

  const calcAddOrSubOne = useCallback((bool: boolean) => {
    if (!bool) {
      console.log("プラス");

      setNumState((N) => N + 1);
    } else {
      console.log("マイナス");
      setNumState((N) => N - 1);
    }
  }, []);

  return [numState, calcAddOrSubOne];
};
