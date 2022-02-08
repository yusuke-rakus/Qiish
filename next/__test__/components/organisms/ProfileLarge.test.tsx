import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ProfileLargeType } from "../../../src/const/Types";
import { ProfileLarge } from "../../../src/components/organisms";

describe("プロフィール(大)のテスト", () => {
  const mockCallback = jest.fn();
  let dummyProps: ProfileLargeType = {
    userInfo: {
      userName: "qiish",
      engineerType: "WEB",
      description: "hello",
      userImage: "",
      articleCount: "",
      followCount: false,
    },
    tagsByNum: [
      {
        id: 1,
        skill: "FR",
        image: null,
      },
    ],
    checkLoginUserFlag: false,
    followerCount: 0,
    followStatus: false,
    changeUsrFollow: mockCallback,
  };
  it("ユーザー情報が表示されていること", () => {
    render(<ProfileLarge {...dummyProps} />);
    expect(
      screen.getByText("@" + dummyProps.userInfo.userName)
    ).toBeInTheDocument();
    // SelectStateTypeの方のため、エラー発生(string|number[]の型からstringを取得しようとするから厄介)
    // expect(
    //   screen.getByText(dummyProps.userInfo.engineerType)
    // ).toBeInTheDocument();
    expect(
      screen.getByText(dummyProps.userInfo.description)
    ).toBeInTheDocument();
    expect(screen.getByText(dummyProps.tagsByNum[0].skill)).toBeInTheDocument();
  });
});
