import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { QiitaProfileSmall } from "../../../src/components/organisms";
import { QiitaProfileSmallType } from "../../../src/const/Types";

describe("Qiita記事詳細コンポーネントのテスト", () => {
  let dummyProps: QiitaProfileSmallType = {
    qiita_user: {
      description: "hello",
      facebook_id: "",
      followees_count: 0,
      followers_count: 0,
      github_login_name: "qiish",
      id: "",
      items_count: 0,
      linkedin_id: "",
      location: "",
      name: "qiish",
      organization: "",
      permanent_id: 0,
      profile_image_url: "",
      team_only: false,
      twitter_screen_name: "",
      website_url: "",
    },
  };

  it("Qiita記事詳細の投稿者情報が表示されること", () => {
    render(<QiitaProfileSmall {...dummyProps} />);

    expect(
      screen.getByText("@" + dummyProps.qiita_user.name)
    ).toBeInTheDocument();
    expect(
      screen.getByText("投稿数 : " + dummyProps.qiita_user.items_count)
    ).toBeInTheDocument();
    expect(
      screen.getByText(dummyProps.qiita_user.description)
    ).toBeInTheDocument();
  });
});
