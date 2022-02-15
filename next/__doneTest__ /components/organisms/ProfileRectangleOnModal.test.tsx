import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ProfileRectangleOnModal } from "../../../src/components/organisms";
import { ProfileRectangleType } from "../../../src/const/Types";
import { ProfileRectangleMock } from "../../../__test__/.mock/data";

describe("長方形のプロフィール(モーダル用)をテスト", () => {
  // ダミーのpropsを定義
  const mockCallback = jest.fn();
  let dummyProps: ProfileRectangleType = {
    ...ProfileRectangleMock,
    changeUsrFollow: mockCallback,
  };

  it("ユーザー情報が表示されていること", () => {
    render(<ProfileRectangleOnModal {...dummyProps} />);
    expect(
      screen.getByText("@" + dummyProps.user_data.userName)
    ).toBeInTheDocument();
    expect(
      screen.getByText(dummyProps.user_data.engineerType)
    ).toBeInTheDocument();
    expect(dummyProps.followStatus).toBeFalsy();
  });
  it("フォローボタンが表示されること", () => {
    render(<ProfileRectangleOnModal {...dummyProps} />);
    expect(screen.getByRole("button").textContent).toBe("フォロー");
  });
  it("ボタンがクリックできること", () => {
    render(<ProfileRectangleOnModal {...dummyProps} />);
    let button = screen.getByRole("button", { name: "フォロー" });
    expect(button).toBeInTheDocument();
    expect(fireEvent.click(button)).toBe(true);
  });
});
