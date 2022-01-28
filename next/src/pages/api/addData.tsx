import axios from "axios";
import { SelectStateType } from "../../hooks/useInputState";

// 記事追加機能(userIdを取得する)
export const addArticle = async (
  userId: number,
  title: string,
  content: string,
  tags: SelectStateType
) => {
  const res = await axios.post("http://localhost:9090/article/add", {
    userInfoId: userId,
    title: title,
    content: content,
    tags: tags,
  });
  return res;
};

// いいね機能(likeフラグがtrueになったら+1カウントを返し、falseなら-1カウントを返す)
// cookieにいいねしたidを保存
export const changeLikeStatus = async (
  userId: number,
  articleId: number,
  likeCount: number,
  articleLikeFlag: boolean
) => {
  if (!articleLikeFlag) {
    // (userInfoIdを取得する)
    await axios.post("http://localhost:9090/article/like", {
      userInfoId: userId,
      articleId: articleId,
    });
    return likeCount + 1;
  } else {
    await axios.post("http://localhost:9090/article/removeLike", {
      userInfoId: userId,
      articleId: articleId,
    });
    return likeCount - 1;
  }
};

// ユーザーフォロー機能
export const changeFollowStatus = async (usrFollowFlag: boolean) => {
  if (!usrFollowFlag) {
    // (userInfoIdを取得する)
    const res = await axios.post("http://localhost:9090/user/follow", {
      userInfoId: 1,
      followUserInfoId: 2,
    });
    return res;
  } else {
    const res = await axios.post("http://localhost:9090/user/remove", {
      userInfoId: 1,
      followUserInfoId: 2,
    });
    return res;
  }
};
