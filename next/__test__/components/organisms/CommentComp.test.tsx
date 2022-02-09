import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CommentCompType } from "../../../src/const/Types";
import { CommentComp } from "../../../src/components/organisms";
import moment from "moment";

describe("コメントコンポーネントのテスト", () => {
  const mockChangeCommentLike = jest.fn();
  const mockSetLikeUserModalStatus = jest.fn();
  let dummyProps: CommentCompType = {
    commentData: {
      id: 1,
      articleId: 1,
      likeStatus: 1,
      likesCount: 1,
      userInfoId: 1,
      comment: "hello",
      commentDate: "2021-02-10",
      commentLikesUserList: [
        {
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
      ],
      userInfo: {
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
    },
    likesCount: 0,
    likeStatus: false,
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
