import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CommentCompType } from "../../../src/const/Types";
import { CommentComp } from "../../../src/components/organisms";
import { commentDataMock } from "../../../__test__/.mock/data";
import moment from "moment";

describe("コメントコンポーネントのテスト", () => {
  const mockCallback = jest.fn();

  let dummyProps: CommentCompType = {
    ...commentDataMock,
    onDeleteComment: mockCallback,
    changeCommentLike: mockCallback,
    setLikeUserModalStatus: mockCallback,
  };
  it("コメントページのデータが表示されること", () => {
    render(<CommentComp {...dummyProps} />);
    const formatDate = moment(dummyProps.commentData.commentDate).format(
      "YYYY年M月D日"
    );
    expect(
      screen.getByText("@" + dummyProps.commentData.userInfo.userName)
    ).toBeInTheDocument();
    expect(
      screen.getByText(dummyProps.commentData.comment)
    ).toBeInTheDocument();
    expect(dummyProps.commentData.likeStatus).toBe(1);
    expect(screen.getByText(formatDate)).toBeInTheDocument();
  });
});
