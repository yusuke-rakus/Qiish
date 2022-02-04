import { useCallback, useState } from "react";

/**
 * 真偽値を反転させるメソッド(引数がnumber型の場合)
 *
 * @remarks paramの0か1で真偽値を判別し、initalBoolを真偽値としている
 * @param initialState 初期値(0か1)
 * @returns [state: 真偽値, toggle: 真偽値を反転させる処理]
 */
export const useToggleByNum = (initialState: number): [boolean, () => void] => {
  // initalStateが0だったらfalse,1だったらtrue
  let initalBool = true;
  if (initialState === 0) {
    initalBool = false;
  } else {
    initalBool = true;
  }

  const [state, setState] = useState(initalBool);
  const toggle = useCallback(() => {
    setState((b) => !b);
  }, []);
  return [state, toggle];
};
