import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ProfileSmallType } from "../../../src/const/Types";
import { ProfileSmall } from "../../../src/components/organisms";
import { profileSmallDataMock } from "../../.mock/data/userData";

describe("プロフィール(小)のテスト", () => {
  const mockCallback = jest.fn();
  let dummyProps: ProfileSmallType = {
    ...profileSmallDataMock,
    followerCount: 0,
    changeUsrFollow: mockCallback,
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
