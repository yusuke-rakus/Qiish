import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ProfileRectangle } from "../../../src/components/organisms";
import { ProfileRectangleType } from "../../../src/const/Types";

describe("長方形のプロフィールをテスト", () => {
  // ダミーのpropsを定義
  const mockCallback = jest.fn();
  let dummyProps: ProfileRectangleType = {
    user_data: {
      id: 1,
      userName: "qiish",
      email: "sample@qiish.com",
      engineerType: "WEB",
      description: "hello",
      image: "",
      follow: "",
      followCount: 1,
      follower: "",
      followerCount: 1,
      tags: [
        {
          id: 1,
          skill: "FR",
          image: null,
        },
      ],
      articles: 0,
      articleCount: 0,
      likes: 0,
      comments: "",
      followStatus: 0,
    },
    followStatus: false,
    changeUsrFollow: mockCallback,
    checkLoginUserFlag: false,
  };

  it("ユーザー情報が表示されていること", () => {
    render(<ProfileRectangle {...dummyProps} />);
    expect(
      screen.getByText("@" + dummyProps.user_data.userName)
    ).toBeInTheDocument();
    expect(
      screen.getByText(dummyProps.user_data.engineerType)
    ).toBeInTheDocument();
    expect(dummyProps.followStatus).toBeFalsy();
    // ボタンをクリックしてbool切り替えしたい(未着手)
    // fireEvent.click(screen.getByText("フォロー"));
    // screen.debug();
    // expect(dummyProps.followStatus).toBeTruthy();
  });

  it("フォローボタンが表示されること", () => {
    render(<ProfileRectangle {...dummyProps} />);
    expect(screen.getByRole("button").textContent).toBe("フォロー");
  });
});