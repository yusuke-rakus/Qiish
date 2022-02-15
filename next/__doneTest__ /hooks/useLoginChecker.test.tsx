import "@testing-library/jest-dom/extend-expect";
import { useLoginChecker } from "../../src/hooks";
import { renderHook } from "@testing-library/react-hooks";

describe("useLoginCheckerに関する処理のテスト", () => {
  test("useLoginCheckerが存在するかどうか", () => {
    expect(useLoginChecker).toBeDefined();
  });

  test("ログインしていたらtureが帰ってくる", () => {
    // Cookieに保存されているID(モック)
    const mockCookieId = 1;
    // ID:1でログインしているユーザー
    const checkUserId = 1;

    const { result } = renderHook(() =>
      useLoginChecker(checkUserId, mockCookieId)
    );
    expect(result.current).toEqual(true);
  });

  test("ログインしていなければfalseが帰ってくる", () => {
    // Cookieに保存されているID(モック)
    const mockCookieId = 1;
    // ID:2でログインしているユーザー
    const checkUserId = 2;
    const { result } = renderHook(() =>
      useLoginChecker(checkUserId, mockCookieId)
    );
    expect(result.current).toEqual(false);
  });
});
