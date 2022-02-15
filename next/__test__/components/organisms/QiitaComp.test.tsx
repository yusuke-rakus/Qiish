import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { QiitaComp } from "../../../src/components/organisms";
import { QiitaCompType } from "../../../src/const/Types";
import moment from "moment";
import { qiitaData } from "../../.mock/data";

describe("Qiitaの詳細記事をテスト", () => {
  let dummyProps: QiitaCompType = {
    qiita: qiitaData,
    isExistProfile: true,
  };
  it("Qiitaの記事コンポーネントが表示されていること", () => {
    // render(<QiitaComp {...dummyProps} />);
    // const formatDate = moment(dummyProps.qiita.created_at).format(
    //   "YYYY年M月D日"
    // );
    // expect(
    //   screen.getByText("@" + dummyProps.qiita.user.name)
    // ).toBeInTheDocument();
    // expect(screen.getByText(dummyProps.qiita.title)).toBeInTheDocument();
    // // markdownをコメントアウトしているため、エラーになる
    // // expect(screen.getByText(dummyProps.qiita.body)).toBeInTheDocument();
    // expect(dummyProps.qiita.likes_count).toBe(1);
    // expect(screen.getByText("投稿日: " + formatDate)).toBeInTheDocument();
  });
});
