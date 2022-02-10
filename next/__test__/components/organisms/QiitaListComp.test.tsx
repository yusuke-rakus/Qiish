import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { QiitaListComp } from "../../../src/components/organisms";
import { QiitaListCompType } from "../../../src/const/Types";
import moment from "moment";
import { qiitaData } from "../../.mock/data";

describe("Qiita記事一覧のテスト", () => {
  let dummyProps: QiitaListCompType = {
    qiitaData: qiitaData,
  };
  it("Qiita記事一覧コンポーネントが表示されていること", () => {
    render(<QiitaListComp {...dummyProps} />);
    const formatDate = moment(dummyProps.qiitaData.created_at).format(
      "YYYY年M月D日"
    );
    expect(
      screen.getByText(
        `@${dummyProps.qiitaData.user.github_login_name}が${formatDate}に投稿しました`
      )
    ).toBeInTheDocument();
    expect(screen.getByText(dummyProps.qiitaData.title)).toBeInTheDocument();
  });
});
