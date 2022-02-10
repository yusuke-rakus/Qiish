import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { QiitaProfileSmall } from "../../../src/components/organisms";
import { QiitaProfileSmallType } from "../../../src/const/Types";
import { qiitaUser } from "../../.mock/data";

describe("Qiita記事詳細コンポーネントのテスト", () => {
  let dummyProps: QiitaProfileSmallType = {
    qiita_user: qiitaUser,
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
