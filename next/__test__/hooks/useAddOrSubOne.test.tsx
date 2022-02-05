import "@testing-library/jest-dom/extend-expect";
import { useAddOrSubOne } from "../../src/hooks";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useAddOrSubOneメソッドに関する処理", () => {
  test("useAddOrSubOneが存在するかどうか", () => {
    expect(useAddOrSubOne).toBeDefined();
  });

  test("値を±1する処理", () => {
    const { result } = renderHook(() => useAddOrSubOne(1));
    // 初期値の値と同じかチェック
    expect(result.current[0]).toEqual(1);
    // -1する処理実行
    act(() => {
      result.current[1](true);
    });
    //-1された値か確認
    expect(result.current[0]).toEqual(0);
    // +1する処理実行
    act(() => {
      result.current[1](false);
    });
    //+1された値か確認
    expect(result.current[0]).toEqual(1);
  });
});
