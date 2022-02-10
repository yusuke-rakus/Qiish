import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CommentCompType } from "../../../src/const/Types";
import { CommentComp } from "../../../src/components/organisms";
import { commentData } from "../../.mock/data";
import moment from "moment";

describe("コメントコンポーネントのテスト", () => {
  const mockOnDeleteComment = jest.fn();
  const mockChangeCommentLike = jest.fn();
  const mockSetLikeUserModalStatus = jest.fn();
  let dummyProps: CommentCompType = {
    commentData: commentData,
    likesCount: 0,
    likeStatus: false,
    checkLoginUserFlag: false,
    onDeleteComment: mockOnDeleteComment,
    changeCommentLike: mockChangeCommentLike,
    setLikeUserModalStatus: mockSetLikeUserModalStatus,
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
