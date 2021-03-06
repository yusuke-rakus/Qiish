import "@testing-library/jest-dom/extend-expect";
import { useToggle } from "../../src/hooks";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useToggleに関する処理のテスト", () => {
  test("useToggleが存在するかどうか", () => {
    expect(useToggle).toBeDefined();
  });

  test("Booleanの初期値(true)を反転させる処理", () => {
    const { result } = renderHook(() => useToggle(true));

    // Boolean反転前, 第一引数のステートをチェック
    expect(result.current[0]).toEqual(true);
    // 第二引数の関数を実行
    act(() => {
      result.current[1]();
    });
    //Boolean反転後, ステートをチェック
    expect(result.current[0]).toEqual(false);
  });

  test("Booleanの初期値(false)を反転させる処理", () => {
    const { result } = renderHook(() => useToggle(false));

    // Boolean反転前, 第一引数のステートをチェック
    expect(result.current[0]).toEqual(false);
    // 第二引数の関数を実行
    act(() => {
      result.current[1]();
    });
    //Boolean反転後, ステートをチェック
    expect(result.current[0]).toEqual(true);
  });
});
