import { useCallback, useState } from "react";

/**
 * 真偽値を反転させるメソッド
 *
 * @param initialState - 初期値(真偽値)
 * @returns [state: 真偽値, toggle: 真偽値を反転させる処理]
 */
export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => {
    setState((b) => !b);
  }, []);
  return [state, toggle];
};
