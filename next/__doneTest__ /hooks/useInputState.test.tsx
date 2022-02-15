import "@testing-library/jest-dom/extend-expect";
import { useTextState, useSelectState } from "../../src/hooks";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useInputStateに関する処理のテスト", () => {
  test("useTextState,useSelectStateが存在するかどうか", () => {
    expect(useTextState).toBeDefined();
    expect(useSelectState).toBeDefined();
  });

  test("inputタグ又はtextAreaタグに入力するテスト完了", () => {
    const { result } = renderHook(() => useTextState(""));
    const e: any = {
      preventDefault() {},
      target: { value: "test" },
    };

    // 初期値を確認
    expect(result.current[0]).toEqual("");
    // 第二引数の関数を実行
    act(() => {
      result.current[1](e);
    });
    //Boolean反転後, ステートをチェック
    expect(result.current[0]).toEqual("test");
  });
  test("selectタグ(string型)に入力するテスト完了", () => {
    const { result } = renderHook(() => useSelectState(""));
    const value = "test";

    // 初期値を確認
    expect(result.current[0]).toEqual("");
    // 第二引数の関数を実行
    act(() => {
      result.current[1](value);
    });
    //Boolean反転後, ステートをチェック
    expect(result.current[0]).toEqual("test");
  });
  test("selectタグ(number[]型)に入力するテスト完了", () => {
    const { result } = renderHook(() => useSelectState(new Array<number>()));
    const value = [1, 2, 3, 4];

    // 初期値を確認
    expect(result.current[0]).toEqual([]);
    // 第二引数の関数を実行
    act(() => {
      result.current[1](value);
    });
    //Boolean反転後, ステートをチェック
    expect(result.current[0]).toEqual([1, 2, 3, 4]);
  });
});
