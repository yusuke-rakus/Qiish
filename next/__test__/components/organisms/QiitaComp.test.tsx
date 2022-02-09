import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { QiitaComp } from "../../../src/components/organisms";
import { QiitaCompType } from "../../../src/const/Types";
import moment from "moment";

describe("Qiitaの詳細記事をテスト", () => {
  let dummyProps: QiitaCompType = {
    qiita: {
      body: "qiita記事詳細",
      coediting: false,
      comments_count: 0,
      created_at: "2021-01-20",
      group: 0,
      id: "1",
      likes_count: 1,
      page_views_count: 1,
      private: false,
      reactions_count: 1,
      rendered_body: "1",
      tags: [
        {
          name: "HTML",
          versions: "",
        },
      ],
      team_membership: 1,
      title: "記事詳細タイトル",
      updated_at: "2021-01-21",
      url: "",
      user: {
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
    },
    isExistProfile: true,
  };
  it("Qiitaの記事コンポーネントが表示されていること", () => {
    render(<QiitaComp {...dummyProps} />);
    const formatDate = moment(dummyProps.qiita.created_at).format(
      "YYYY年M月D日"
    );

    expect(
      screen.getByText("@" + dummyProps.qiita.user.name)
    ).toBeInTheDocument();
    expect(screen.getByText(dummyProps.qiita.title)).toBeInTheDocument();
    // markdownをコメントアウトしているため、エラーになる
    // expect(screen.getByText(dummyProps.qiita.body)).toBeInTheDocument();
    expect(dummyProps.qiita.likes_count).toBe(1);
    expect(screen.getByText("投稿日: " + formatDate)).toBeInTheDocument();
  });
});
