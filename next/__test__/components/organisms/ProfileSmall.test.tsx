import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ProfileSmallType } from "../../../src/const/Types";
import { ProfileSmall } from "../../../src/components/organisms";

describe("プロフィール(小)のテスト", () => {
  const mockCallback = jest.fn();
  let dummyProps: ProfileSmallType = {
    user: {
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
    followerCount: 0,
    followStatus: false,
    changeUsrFollow: mockCallback,
    checkLoginUserFlag: false,
  };
  it("ユーザー情報が表示されること", () => {
    render(<ProfileSmall {...dummyProps} />);
    expect(
      screen.getByText("@" + dummyProps.user.userName)
    ).toBeInTheDocument();
    expect(screen.getByText(dummyProps.user.engineerType)).toBeInTheDocument();
    expect(screen.getByText(dummyProps.user.followCount)).toBeInTheDocument();
    expect(screen.getByText(dummyProps.user.followerCount)).toBeInTheDocument();
    expect(screen.getByText(dummyProps.user.tags[0].skill)).toBeInTheDocument();
    // screen.debug();
  });
});
